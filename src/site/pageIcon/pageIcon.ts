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
      icon.tags.forEach((tag) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = tag.name || 'error';
        a.href = `/icons?tag=${tag.url}`;
        li.appendChild(a);
        this.$tagList.appendChild(li);
      });
      // Aliases
      icon.aliases.forEach((alias) => {
        const li = document.createElement('li');
        li.innerText = alias.name || 'error';
        this.$aliasList.appendChild(li);
      });
    }
  }
}