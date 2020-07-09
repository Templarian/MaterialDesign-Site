import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcons.html";
import style from './pageIcons.css';

import '@mdi/components/mdi/scroll';
import '@mdi/components/mdi/grid';
import MdiGrid from '@mdi/components/mdi/grid';
import { Icon } from '@mdi/components/mdi/shared/models/icon';

@Component({
  selector: 'site-page-icons',
  style,
  template 
})
export default class SitePageIcons extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $grid: MdiGrid;

  connectedCallback() {
  }
  
  render(changes) {
    if (changes.icons && this.icons) {
      this.$grid.icons = this.icons;
    }
  }
}