import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Database, IconTable } from './database';

import { Icon } from './models/icon.model';
import { Font } from './models/font.model';
import { Alias } from './models/alias.model';
import { Tag } from './models/tag.model';

interface StringMap {
  [key: string]: string;
}

const font = new Font().from({
  id: 'D051337E-BC7E-11E5-A4E9-842B2B6CFE1B'
} as Font);

@Injectable()
export class DatabaseService {

  constructor(
    private http: HttpClient
  ) {}

  private db = new Database();

  /**
   * Get list of hashes for icons in font
   * 
   * @param font Font id to lookup hashes for
   */
  private async getHashesFromServer(font: Font): Promise<StringMap> {
    const res = await this.http.get<StringMap>(`/api/font/${font.id}/hash`).toPromise();
    return res;
  }

  private async getIconsFromServer(font: Font, ids: string[]): Promise<Icon[]> {
    if (ids.length === 0) {
      return [];
    }
    const res = await this.http.get<Icon[]>(`/api/font/${font.id}`, {
      params: {
        ids: ids.join(',')
      }
    }).toPromise();
    return res.map(icon => new Icon().from(icon));
  }

  private async getIconsByPage(font: Font, page: number, size: number) {
    const res = await this.http.get<Icon[]>(`/api/font/${font.id}`, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    }).toPromise();
    return res.map(icon => new Icon().from(icon));
  }

  async asyncThrottledMap<T, U>(maxCount: number, array: T[], f: (x: T) => Promise<U>) {
    let inFlight = new Set<Promise<U>>();
    const result: Promise<U>[] = [];

    // Sequentially add a Promise for each operation.
    for (let elem of array) {

        // Wait for any one of the promises to complete if there are too many running.
        if (inFlight.size >= maxCount) {
            await Promise.race(inFlight);
        }

        // This is the Promise that the user originally passed us back.
        const origPromise = f(elem);
        // This is a Promise that adds/removes from the set of in-flight promises.
        const handledPromise = wrap(origPromise);
        result.push(handledPromise);
    }

    return Promise.all(result);

    async function wrap(p: Promise<U>) {
        inFlight.add(p);
        const result = await p;
        inFlight.delete(p);
        return result;
    }
  }

  async sync() {
    console.log('start');
    const hashes = await this.getHashesFromServer(font);
    const hashIds = Object.keys(hashes);
    const localHashObj = await this.db.hashes.toArray();
    const localHashes = {};
    localHashObj.forEach((item) => {
      localHashes[item.id] = item.hash;
    });
    const localHashIds = Object.keys(localHashes);
    const modifiedIds = [];
    hashIds.forEach((id) => {
      if (!(id in localHashes) || localHashes[id] !== hashes[id]) {
        modifiedIds.push(id);
      }
    });
    const removeIds = [];
    localHashIds.forEach((id) => {
      if (!(id in hashes)) {
        removeIds.push(id);
      }
    });
    await this.db.icons.bulkDelete(removeIds);
    if (modifiedIds.length < 500) {
      // Do a partial update patch of data
      let i, j, chunkIds = [], chunk = 100;
      for (i = 0, j = modifiedIds.length; i < j; i += chunk) {
        chunkIds.push(modifiedIds.slice(i, i + chunk));
      }
      const chunkPromises = chunkIds.map((ids) => {
        return this.getIconsFromServer(font, ids);
      });
      const results = await Promise.all(chunkPromises);
      results.forEach(icons => {
        this.db.icons.bulkPut(
          icons.map(icon => ({
            id: icon.fontIcon.id,
            idFull: icon.id,
            fontId: font.id,
            name: icon.name,
            data: icon.data,
            version: icon.version,
            codepoint: icon.codepoint,
            aliases: icon.aliases,
            tags: icon.tags
          })
        ));
      });
    } else {
      // Sync every icon into the database
      let size = 500,
        pages = Math.ceil(hashIds.length / size),
        chunkPromises = [];
      for (let page = 1; page <= pages; page++) {
        chunkPromises.push(
          this.getIconsByPage(font, page, size)
        );
      }
      await this.asyncThrottledMap<Promise<Icon[]>, void>(2, chunkPromises, (p) =>
        p.then(icons => {
          this.db.icons.bulkPut(
            icons.map(icon => ({
              id: icon.fontIcon.id,
              idFull: icon.id,
              fontId: font.id,
              name: icon.name,
              data: icon.data,
              version: icon.version,
              codepoint: icon.codepoint,
              aliases: JSON.stringify(icon.aliases),
              tags: JSON.stringify(icon.tags)
            })
          ));
        })
      );
    }
    await this.db.hashes.bulkPut(hashIds.map(id => ({ id, hash: hashes[id] })));
    await this.db.hashes.bulkDelete(removeIds);
    console.log('done');
  }

  convert(local: IconTable) {
    const icon = new Icon();
    icon.id = local.idFull;
    icon.name = local.name;
    icon.data = local.data;
    icon.version = local.version;
    icon.codepoint = local.codepoint;
    const aliases = JSON.parse(local.aliases);
    icon.aliases = aliases.map(alias => new Alias().from(alias));
    const tags = JSON.parse(local.tags);
    icon.tags = tags.map(tag => new Tag().from(tag));
    return icon;
  }

  async getIconByName(name) {
    const local = await this.db.icons.where('name').equals(name).first();
    if (!local) {
      return null;
    }
    return this.convert(local);
  }

  async getIcons() {
    const icons = await this.db.icons.where('fontId').equals(font.id).sortBy('name');
    return icons.map(icon => this.convert(icon));
  }

  async delete() {
    await this.db.delete();
  }

}