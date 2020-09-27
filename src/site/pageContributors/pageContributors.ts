import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageContributors.html";
import style from './pageContributors.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { http } from '@mdi/components/mdi/shared/http';
import { User } from '@mdi/components/mdi/shared/models/user';
import '@mdi/components/mdi/cardUser';
import MdiCardUser from '@mdi/components/mdi/cardUser';

@Component({
  selector: 'site-page-contributors',
  style,
  template 
})
export default class SitePageContributors extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $header: HTMLHeadingElement;
  @Part() $loading: HTMLDivElement;
  @Part() $error: HTMLDivElement;
  @Part() $main: HTMLDivElement;
  @Part() $core: HTMLDivElement;
  @Part() $community: HTMLDivElement;

  connectedCallback() {
    this.load();
  }

  async load() {
    const packageId = '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B';
    const users = (await http.get<User[]>(`api/package/${packageId}/user`)).map(user => new User().from(user));;
    const { error } = users as any;
    this.$loading.style.display = 'none';
    if (error) {
      this.$error.style.display = 'block';
    } else {
      users.filter(u => u.core && (u.iconCount || 0) > 0).forEach(user => {
        this.addUser(this.$core, user);
      });
      users.filter(u => !u.core && (u.iconCount || 0) > 0).forEach(user => {
        this.addUser(this.$community, user);
      });
      this.$main.style.display = 'block';
    }
  }

  addUser(parent: HTMLDivElement, user: User) {
    const $user = document.createElement('mdi-card-user') as MdiCardUser;
    $user.user = user;
    parent.appendChild($user);
  }
}