import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcons.html";
import style from './pageIcons.css';

import '@mdi/components/mdi/buttonLink';
import '@mdi/components/mdi/scroll';
import '@mdi/components/mdi/grid';
import MdiGrid from '@mdi/components/mdi/grid';
import '@mdi/components/mdi/inputTextIcon';
import MdiInputTextIcon from '@mdi/components/mdi/inputTextIcon';
import '@mdi/components/mdi/inputSelect';
import MdiInputSelect from '@mdi/components/mdi/inputSelect';
import '@mdi/components/mdi/inputUserSelect';
import MdiInputUserSelect from '@mdi/components/mdi/inputUserSelect';
import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { http } from '@mdi/components/mdi/shared/http';
import { Tag } from '@mdi/components/mdi/shared/models/tag';
import { User } from '@mdi/components/mdi/shared/models/user';
import '@mdi/components/mdi/avatar';
import MdiAvatar from '@mdi/components/mdi/avatar';
import { addTooltip } from '@mdi/components/mdi/tooltip';

@Component({
  selector: 'site-page-icons',
  style,
  template 
})
export default class SitePageIcons extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $grid: MdiGrid;
  @Part() $search: MdiInputTextIcon;
  @Part() $select: MdiInputSelect;
  @Part() $contributors: HTMLDivElement;

  async connectedCallback() {
    const packageId = '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B';
    const tags = (await http.get<Tag[]>(`/api/package/${packageId}/tag`)).map(tag => new Tag().from(tag));
    this.$select.options = [
      {
        label: 'All Tags',
        value: 'all'
      },
      ...tags.map(tag => ({
        label: tag.name,
        value: tag.id
      }))
    ];
    this.$select.value = 'all';
    const users = (await http.get<User[]>(`/api/package/${packageId}/user`)).map(user => new User().from(user));
    users.forEach(user => {
      const avatar = document.createElement('mdi-avatar') as MdiAvatar;
      avatar.user = user;
      this.$contributors.appendChild(avatar);
      addTooltip(avatar, () => {
        return `${user.name} (${user.iconCount})`;
      });
    });
  }
  
  render(changes) {
    if (changes.icons && this.icons) {
      this.$grid.icons = this.icons;
    }
  }
}