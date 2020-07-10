import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageHistory.html";
import style from './pageHistory.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { http } from '@mdi/components/mdi/shared/http';

@Component({
  selector: 'site-page-history',
  style,
  template 
})
export default class SitePageHistory extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $header: HTMLHeadingElement;
  @Part() $loading: HTMLDivElement;
  @Part() $error: HTMLDivElement;
  @Part() $icon: HTMLDivElement;

  async load(name: string) {
    const packageId = '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B';
    /*const icon = await http.get<Icon>(`/api/package/${packageId}/name/${name}`);
    const { error } = icon as any;
    this.$loading.style.display = 'none';
    if (error) {
      this.$error.style.display = 'block';
    } else {
      const related = await http.get<Icon[]>(`/api/icon/${icon.id}/base`);
      this.$icon.style.display = 'block';
    }*/
  }
}