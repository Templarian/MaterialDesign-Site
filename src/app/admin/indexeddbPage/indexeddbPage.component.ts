import { Component } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';
import { Alias } from 'app/shared/models/alias.model';
import { Tag } from 'app/shared/models/tag.model';
import { DatabaseService } from 'app/shared/database.service';
import { Router } from '@angular/router';
import { Database } from './database';
import { Font } from 'app/shared/models/font.model';

@Component({
  selector: 'mdi-admin-indexeddb-page',
  templateUrl: './indexeddbPage.component.html',
  styleUrls: ['./indexeddbPage.component.scss'],
  providers: [
    LoginService,
    DatabaseService
  ]
})
export class AdminIndexeddbPageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public aliasName: string = '';

  public disabledTag: boolean = false;

  constructor(
    private loginService: LoginService,
    private databaseService: DatabaseService,
    private router: Router
  ) {
    
  }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
  }

  goBack () {
    this.router.navigateByUrl('/admin/index')
  }

  async logout () {
    await this.loginService.logout();
  }

  db = new Database();

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
    const font = new Font().from({
      id: 'D051337E-BC7E-11E5-A4E9-842B2B6CFE1B'
    } as Font);
    const hashes = await this.databaseService.getHashes(font);
    const hashIds = Object.keys(hashes);
    const localHashObj = await this.db.hashes.toArray();
    const localHashes = {};
    localHashObj.forEach((item) => {
      localHashes[item.id] = item.hash;
    });
    const localHashIds = Object.keys(localHashes);
    const updateIds = [];
    hashIds.forEach((id) => {
      if (!(id in localHashes) || localHashes[id] !== hashes[id]) {
        updateIds.push(id);
      }
    });
    const removeIds = [];
    localHashIds.forEach((id) => {
      if (!(id in hashes)) {
        removeIds.push(id);
      }
    });
    await this.db.icons.bulkDelete(removeIds);
    if (updateIds.length < 500) {
      // Do a partial update patch of data
      let i, j, chunkIds = [], chunk = 100;
      for (i = 0, j = updateIds.length; i < j; i += chunk) {
        chunkIds.push(updateIds.slice(i, i + chunk));
      }
      const chunkPromises = chunkIds.map((ids) => {
        return this.databaseService.getIcons(font, ids);
      });
      await Promise.all(chunkPromises);
    } else {
      // Sync every icon into the database
      let size = 500,
        pages = Math.ceil(hashIds.length / size),
        chunkPromises = [];
      for (let page = 1; page < pages; page++) {
        chunkPromises.push(
          this.databaseService.getIconsByPage(font, page, size)
        );
      }
      await this.asyncThrottledMap<Icon[], void>(2, chunkPromises, (icons) => {
        this.db.icons.bulkAdd(
          icons.map(icon => ({
            id: icon.id.substr(0, 8),
            idFull: icon.id,
            name: icon.name,
            data: icon.data,
            codepoint: icon.codepoint,
            aliases: JSON.stringify(icon.aliases),
            tags: JSON.stringify(icon.tags)
          })
        ));
        return Promise.resolve();
      });
    }
    await this.db.hashes.bulkPut(hashIds.map(id => ({ id, hash: hashes[id] })));
    await this.db.hashes.bulkDelete(removeIds);
    console.log('done');
  }

  async where() {
    this.db.hashes.where('id').equals('e602027a').first().then((item) => {
      console.log(item);
    }, (err) => {
      console.log('not found')
    });
  }

  async delete() {
    await this.db.delete();
  }

}