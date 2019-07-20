import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Modification } from 'app/shared/models/modification.model';
import { User } from 'app/shared/models/user.model';
import { Icon } from 'app/shared/models/icon.model';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ModificationService {

  constructor(
    private http: HttpClient
  ) { }

  async getModificationsByType(
    packageId: string,
    modifications: ModificationType[],
    page: number = 1,
    size: number = 100
  ): Promise<Modification[]> {
    return await this.http.get<Modification[]>('/api/package/' + packageId + '/modification', {
      params: (new HttpParams())
        .set('modificationId', modifications.join(','))
        .set('page', page.toString())
        .set('size', size.toString())
    }).toPromise();
  }

  async getIconModificationsByType(
    iconId: string,
    modifications: ModificationType[],
    page: number = 1,
    size: number = 100
  ): Promise<Modification[]> {
    return await this.http.get<Modification[]>('/api/icon/' + iconId + '/modification', {
      params: (new HttpParams())
        .set('modificationId', modifications.join(','))
        .set('page', page.toString())
        .set('size', size.toString())
    }).toPromise();
  }

  async getAdminIconModificationsByType(
    iconId: string,
    modifications: ModificationType[],
    page: number = 1,
    size: number = 100
  ): Promise<Modification[]> {
    return await this.http.get<Modification[]>('/api/admin/icon/' + iconId + '/modification', {
      params: (new HttpParams())
        .set('modificationId', modifications.join(','))
        .set('page', page.toString())
        .set('size', size.toString())
    }).toPromise();
  }

  async setAssignedIssue(m: Modification) {
    return await this.http.post<Modification>('/api/admin/modification/issue', m)
      .toPromise();
  }

  async setVisible(m: Modification) {
    return await this.http.post<Modification>('/api/admin/modification/visible', m)
      .toPromise();
  }

  async setHidden(m: Modification) {
    return await this.http.post<Modification>('/api/admin/modification/hidden', m)
      .toPromise();
  }

}