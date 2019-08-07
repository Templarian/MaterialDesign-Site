import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DateTime } from 'luxon';

import { Icon } from 'app/shared/models/icon.model';
import { Alias } from 'app/shared/models/alias.model';
import { Package } from 'app/shared/models/package.model';
import { PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { Tag } from 'app/shared/models/tag.model';
import { Style } from './models/style.model';
import { User } from './models/user.model';
import { Font } from './models/font.model';
import { FontVersion } from './models/fontVersion.model';

type BundleCache = {
  isCached: boolean;
  date: DateTime;
};

@Injectable()
export class IconService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  @PromiseCache()
  async getIcons(@CacheParam packageId: string): Promise<Icon[]> {
    let res = await this.http.get<Package>(`/api/package/${packageId}`)
      .toPromise();
    return res.icons.map(i => new Icon().from(i));
  }

  async getIcon(iconId: string): Promise<Icon> {
    let res = await this.http.get<Icon>(`/api/icon/${iconId}`)
      .toPromise();
    return new Icon().from(res);
  }

  async getIconsByName(packageId: string, names: string[]): Promise<Icon[]> {
    let res = await this.http.get<Package>(`/api/package/${packageId}`, {
      params: (new HttpParams())
        .set('names', names.join(','))
    }).toPromise();
    return res.icons.map(i => new Icon().from(i));
  }

  async getIconByName(packageId: string, name: string): Promise<Icon> {
    let res = await this.http.get<Icon>(`/api/package/${packageId}/name/${name}`)
      .toPromise();
    return new Icon().from(res);
  }

  async getBaseChildrenIcons(baseIconId: string): Promise<Icon[]> {
    let res = await this.http.get<Icon[]>(`/api/icon/${baseIconId}/base`)
      .toPromise();
    return res.map(i => new Icon().from(i));
  }

  async getStyles(packageId: string): Promise<Style[]> {
    let res = await this.http.get<Style[]>(`/api/style/${packageId}`)
      .toPromise();
    return res.map(i => new Style().from(i));
  }

  async getAdminIcon(iconId: string): Promise<Icon> {
    let res = await this.http.get<Icon>(`/api/admin/icon/${iconId}`)
      .toPromise();
    return new Icon().from(res);
  }

  async getAdminPackages(): Promise<Package[]> {
    let res = await this.http.get<Package[]>(`/api/admin/package`)
      .toPromise();
    return res.map(p => new Package().from(p));
  }

  async getAdminFonts(packageId: string): Promise<Font[]> {
    let res = await this.http.get<Font[]>(`/api/admin/package/${packageId}/font`)
      .toPromise();
    return res.map(f => new Font().from(f));
  }

  async getAdminIcons(packageId: string): Promise<Icon[]> {
    let res = await this.http.get<Icon[]>(`/api/admin/package/${packageId}/icon`)
      .toPromise();
    return res.map(i => new Icon().from(i));
  }

  async getAdminIconsByTag(pack: Package, tag: Tag): Promise<Icon[]> {
    let res = await this.http.get<Icon[]>(`/api/admin/icon/${pack.id}/tag/${tag.id}`)
      .toPromise();
    return res.map(i => new Icon().from(i));
  }

  async getAdminFontNextCodepoint(font: Font): Promise<Icon> {
    // Get the hex codepoint ex: F001
    let res = await this.http.get<Icon>(`/api/admin/font/${font.id}/next`)
      .toPromise();
    return new Icon().from(res);
  }

  async getAdminFontNoVersion(font: Font): Promise<Icon[]> {
    // Find all icons without a font version (aka no codepoint)
    let res = await this.http.get<Icon[]>(`/api/admin/font/${font.id}/none`)
      .toPromise();
    return res.map(i => new Icon().from(i));
  }

  async getAdminFontVersion(fontVersion: FontVersion): Promise<Icon[]> {
    // Find all icons with a codepoint
    let res = await this.http.get<Icon[]>(`/api/admin/font/version/${fontVersion.id}`)
      .toPromise();
    return res.map(i => new Icon().from(i));
  }

  async generateSvgBundle(fontVersion: FontVersion): Promise<boolean> {
    let res = await this.http.get<boolean>(`/api/admin/font/version/${fontVersion.id}/generate/svg`)
      .toPromise();
    return res;
  }

  async getSvgBundleCacheDate(fontVersion: FontVersion): Promise<BundleCache> {
    let res = await this.http.get<BundleCache>(`/api/admin/font/version/${fontVersion.id}/generate/svg/cache`)
      .toPromise();
    return {
      date: DateTime.fromISO(res.date),
      isCached: res.isCached
    };
  }

  async generateFontBundle(fontVersion: FontVersion): Promise<boolean> {
    let res = await this.http.get<boolean>(`/api/admin/font/version/${fontVersion.id}/generate/font`)
      .toPromise();
    return res;
  }

  async getFontBundleCacheDate(fontVersion: FontVersion): Promise<BundleCache> {
    let res = await this.http.get<BundleCache>(`/api/admin/font/version/${fontVersion.id}/generate/font/cache`)
      .toPromise();
    return {
      date: DateTime.fromISO(res.date),
      isCached: res.isCached
    };
  }

  async setCodepoint(icon: Icon, fontVersion: FontVersion): Promise<Icon> {
    let res = await this.http.post<Icon>(`/api/admin/font/version/${fontVersion.id}/codepoint`, {
      icon: {
        id: icon.id,
        codepoint: icon.codepoint
      }
    }).toPromise();
    // Will not contain codepoint
    return new Icon().from(res);
  }

  async addIcon(icon: Icon, user?: User, issue?: string): Promise<Icon> {
    const body: any = {
      icon: {
        packageId: icon.packageId,
        name: icon.name,
        description: icon.description,
        data: icon.data,
        published: icon.published
      },
    };
    if (user) { body.user = { id: user.id }; }
    if (issue) { body.modification = { issue }; }
    let res = await this.http.post<Icon>('/api/admin/icon', body).toPromise();
    return new Icon().from(res);
  }

  async updateUser(icon: Icon, user: User): Promise<Icon> {
    const body = {
      icon: {
        id: icon.id,
        user: { id: icon.user.id }
      }
    } as any;
    if (user) { body.user = { id: user.id }};
    let res = await this.http.post<Icon>('/api/admin/icon/user', body).toPromise();
    return new Icon().from(res);
  }

  async addAlias(icon: Icon, aliasName: string): Promise<Alias> {
    let res = await this.http.post<Alias>('/api/admin/icon/alias', {
      icon: { id: icon.id },
      alias: { name: aliasName }
    }).toPromise();
    return new Alias().from(res);
  }

  async addTag(icon: Icon, tag: Tag): Promise<Tag> {
    let res = await this.http.post<Tag>('/api/admin/icon/tag', {
      icon: { id: icon.id },
      tag: { id: tag.id }
    }).toPromise();
    return new Tag().from(res);
  }

  async rename(icon: Icon, user?: User): Promise<Icon> {
    const body: any = {
      icon: {
        id: icon.id,
        name: icon.name
      },
    };
    if (user) { body.user = { id: user.id }};
    let res = await this.http.post<Icon>('/api/admin/icon/name', body).toPromise();
    return new Icon().from(res);
  }

  async updateDescription(icon: Icon, user?: User): Promise<Icon> {
    const body: any = {
      icon: {
        id: icon.id,
        description: icon.description
      }
    };
    if (user) { body.user = { id: user.id }};
    const res = await this.http.post<Icon>('/api/admin/icon/description', body).toPromise();
    return new Icon().from(res);
  }

  async updateData(icon: Icon, user?: User): Promise<Icon> {
    const body: any = {
      icon: {
        id: icon.id,
        data: icon.data
      }
    };
    if (user) { body.user = { id: user.id }};
    const res = await this.http.post<Icon>('/api/admin/icon/data', body).toPromise();
    return new Icon().from(res);
  }

  async optimizeData(icon: Icon): Promise<Icon> {
    let res = await this.http.post<Icon>('/api/admin/icon/optimize', {
      icon: {
        data: icon.data
      }
    }).toPromise();
    return new Icon().from(res);
  }

  async toggleStyle(icon: Icon, style: Style) {
    let res = await this.http.post<Icon>('/api/admin/icon/style', {
      icon: { id: icon.id },
      style: { id: style.id }
    }).toPromise();
    return new Icon().from(res);
  }

  async setBaseIconId(icon: Icon, baseIcon: Icon) {
    let res = await this.http.post<Icon>('/api/admin/icon/base', {
      icon: {
        id: icon.id,
        baseIconId: baseIcon.id
      }
    }).toPromise();
    return new Icon().from(res);
  }

  async updateFontVersion(fontVersion: FontVersion) {
    let res = await this.http.post<FontVersion>('/api/admin/font/version', {
      id: fontVersion.id,
      major: fontVersion.major,
      minor: fontVersion.minor,
      path: fontVersion.patch
    }).toPromise();
    return new FontVersion().from(res);
  }

}