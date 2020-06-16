import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alias } from 'app/shared/models/alias.model';
import { Icon } from './models/icon.model';
import { FontVersion } from './models/fontVersion.model';

@Injectable()
export class AliasService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Assign an alias to an icon.
   * 
   * @param icon Icon that the alias will be assigned
   * @param alias Alias
   * @param fontVersion Audit Log
   */
  async assignAlias(icon: Icon, alias: Alias, fontVersion: FontVersion): Promise<Icon> {
    const body: any = {
      icon: { id: icon.id },
      alias: { name: alias.name },
      fontVersion
    };
    const res = await this.http.post<Icon>('/api/admin/icon/alias', body).toPromise();
    return new Icon().from(res);
  }

  /**
   * Delete an alias from icon.
   * 
   * @param icon Icon to remove alias from
   * @param alias Alias
   */
  async deleteAlias(icon: Icon, alias: Alias): Promise<Icon> {
    const res = await this.http.delete<Icon>(`/api/admin/icon/${icon.id}/alias/${alias.id}`).toPromise();
    return new Icon().from(res);
  }

}