import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcon.html";
import style from './pageIcon.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { http } from '@mdi/components/mdi/shared/http';

import '@mdi/components/mdi/markdown';
import MdiMarkdown from '@mdi/components/mdi/markdown';
import '@mdi/components/mdi/grid';
import MdiGrid from '@mdi/components/mdi/grid';
import '@mdi/components/mdi/preview';
import MdiPreview from '@mdi/components/mdi/preview';
import '@mdi/components/mdi/icon';
import MdiIcon from '@mdi/components/mdi/icon';
import '@mdi/components/mdi/button';
import MdiButton from '@mdi/components/mdi/button';
import '@mdi/components/mdi/avatar';
import MdiAvatar from '@mdi/components/mdi/avatar';
import { User } from '@mdi/components/mdi/shared/models/user';

@Component({
  selector: 'site-page-icon',
  style,
  template 
})
export default class SitePageIcon extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  @Prop() name = '';
  
  @Part() $header: HTMLHeadingElement;
  @Part() $loading: HTMLDivElement;
  @Part() $error: HTMLDivElement;
  @Part() $icon: HTMLDivElement;
  @Part() $related: MdiGrid;
  @Part() $preview: MdiPreview;
  @Part() $codepoint: HTMLSpanElement;
  @Part() $version: HTMLSpanElement;
  @Part() $headerIcon: MdiIcon;
  @Part() $debug: MdiMarkdown;
  @Part() $description: MdiMarkdown;
  @Part() $authorAvatar: MdiAvatar;
  @Part() $authorName: HTMLDivElement;
  @Part() $aliasList: HTMLUListElement;
  @Part() $tagList: HTMLUListElement;
  
  render(changes) {
    if (changes.name && this.name) {
      this.$header.innerText = this.name;
      this.load(this.name);
    }
  }

  async load(name: string) {
    const packageId = '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B';
    const icon = await http.get<Icon>(`/api/package/${packageId}/name/${name}`);
    const { error } = icon as any;
    this.$loading.style.display = 'none';
    if (error) {
      this.$error.style.display = 'block';
    } else {
      // Populate Icon data
      const related = await http.get<Icon[]>(`/api/icon/${icon.id}/base`);
      this.$related.icons = related;
      this.$preview.size = 10;
      this.$preview.path = icon.data as string;
      this.$headerIcon.path = icon.data as string;
      if (icon.fontIcons.length) {
        this.$codepoint.innerText = icon.fontIcons[0].codepoint || 'Not in a Release';
        var version = icon.fontIcons[0].version;
        this.$version.innerText = `v${version.major}.${version.minor}.${version.patch}`
      }
      this.$icon.style.display = 'grid';
      this.$description.text = icon.description || '';
      const ticks = '```';
      this.$debug.text = `${ticks}json\n${JSON.stringify(icon, null, 2)}\n${ticks}`;
      // Author data
      const user = await http.get<User>(`/api/package/${packageId}/user/${icon.user?.id}`);
      this.$authorAvatar.user = user;
      this.$authorName.innerText = user.name || 'Unknown';
      // Tags
      this.renderTags(icon);
      // Aliases
      this.renderAliases(icon);
    }
  }
  
  renderTags(icon) {
    icon.tags.forEach((tag) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const span = document.createElement('span');
      const mdiIcon = document.createElement('mdi-icon') as MdiIcon;
      span.innerText = tag.name || 'error';
      a.href = `/icons?tag=${tag.url}`;
      mdiIcon.path = 'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z';
      a.appendChild(span);
      a.appendChild(mdiIcon);
      li.classList.add('item');
      li.appendChild(a);
      this.$tagList.appendChild(li);
    });
    const li = document.createElement('li');
    const a = document.createElement('a');
    const mdiIcon = document.createElement('mdi-icon') as MdiIcon;
    mdiIcon.path = 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z';
    a.href = '';
    a.appendChild(mdiIcon);
    li.appendChild(a);
    li.classList.add('add');
    this.$tagList.append(li);
  }

  renderAliases(icon) {
    icon.aliases.forEach((alias) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerText = alias.name || 'error';
      li.classList.add('item');
      li.appendChild(span);
      this.$aliasList.appendChild(li);
    });
    const li = document.createElement('li');
    const a = document.createElement('a');
    const mdiIcon = document.createElement('mdi-icon') as MdiIcon;
    mdiIcon.path = 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z';
    a.href = '';
    a.appendChild(mdiIcon);
    li.appendChild(a);
    li.classList.add('add');
    this.$aliasList.append(li);
  }
}