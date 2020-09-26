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
  
  connectedCallback() {
    this.load();
  }

  async load() {
    const packageId = '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B';
    const modifications = await http.get<any>(`/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B/modification?modificationId=B4DEB3A8-A146-4086-9D7B-B67842A9CCB8,66B9FA99-1FAA-4D8F-B87F-B6F3CA444624,AFFE875E-01BC-4A34-9BE3-27625A155B28,1506F66B-CC2A-4575-A20A-DC138628977A,F7B6D49B-A86F-49AC-AF92-6B9D0DF6188B,B1CE1713-A18A-4E9D-9E26-D0B4E44A1FAC&page=1&size=100`)
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