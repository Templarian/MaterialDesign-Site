import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Modification } from 'app/shared/models/modification.model';
import { User } from 'app/shared/models/user.model';
import { Icon } from 'app/shared/models/icon.model';
import { ModificationType } from 'app/shared/enums/modificationType.enum';

@Injectable()
export class ModificationService {

  private isMock: boolean;

  constructor(private http: Http) {
    this.isMock = window.location.href.match(/localhost/) !== null;
  }

  async getModificationsByType(packageId: string, modifications: ModificationType[]): Promise<Modification[]> {
    let res = await this.http.get('/api/modification/' + packageId + (this.isMock ? '/mock.json' : ''), {
      params: {
        modificationId: modifications.join(',')
      }
    }).toPromise();
    return res.json().icons.map(r => {
      let modification = new Modification();
      modification.id = r.id;
      modification.modificaitonId = r.modificaitonId;
      modification.packageId = r.packageId;
      let user = new User();
      user.id = r.user.id;
      user.name = r.user.name;
      user.github = r.user.github;
      user.twitter = r.user.twitter;
      modification.user = user;
      let icon = new Icon();
      icon.id = r.icon.id;
      icon.name = r.icon.name;
      icon.data = r.icon.data;
      icon.user.id = r.icon.user.id;
      icon.user.name = r.icon.user.name;
      icon.user.github = r.icon.user.github;
      icon.user.twitter = r.icon.user.twitter;
      modification.icon = icon;
      modification.iconNameBefore = r.iconNameBefore;
      modification.iconNameAfter = r.iconNameAfter;
      modification.iconDataBefore = r.iconDataBefore;
      modification.iconDataAfter = r.iconDataAfter;
      modification.text = r.text;
      modification.date = r.date;
      return modification;
    });
  }

}