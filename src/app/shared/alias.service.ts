import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alias } from 'app/shared/models/alias.model';
import { Icon } from './models/icon.model';

@Injectable()
export class AliasService {

  constructor(
    private http: HttpClient
  ) { }

  async assignAlias(icon: Icon, alias: Alias): Promise<Alias> {
    let res = await this.http.post<Alias>('/api/admin/icon/alias', {
      icon: { id: icon.id },
      alias: { name: alias.name }
    }).toPromise();
    return new Alias().from(res);
  }

  async deleteAlias(icon: Icon, alias: Alias): Promise<Alias[]> {
    let res = await this.http.delete<Alias[]>(`/api/admin/icon/${icon.id}/alias/${alias.id}`).toPromise();
    return res.map(t => new Alias().from(t));
  }

}