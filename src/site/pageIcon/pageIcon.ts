import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcon.html";
import style from './pageIcon.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { http } from '@mdi/components/mdi/shared/http';

import '@mdi/components/mdi/grid';
import MdiGrid from '@mdi/components/mdi/grid';
import '@mdi/components/mdi/preview';
import MdiPreview from '@mdi/components/mdi/preview';

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
      console.log(icon);
      const related = await http.get<Icon[]>(`/api/icon/${icon.id}/base`);
      this.$related.icons = related;
      this.$preview.size = 8;
      this.$preview.path = icon.data as string;
      this.$icon.style.display = 'block';
    }
  }
}