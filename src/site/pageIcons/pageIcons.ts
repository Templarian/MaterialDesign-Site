import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcons.html";
import style from './pageIcons.css';
import { Icon } from '@mdi/components/mdi/shared/models/icon';

/*
import '@mdi/components/mdi/scroll';
import '@mdi/components/mdi/grid';
import MdiGrid from '@mdi/components/mdi/grid';
*/
@Component({
  selector: 'site-page-icons',
  style,
  template 
})
export default class SitePageIcons extends HTMLElement {
  @Prop() icons: Icon[] = [];
  
  //@Part() $grid: MdiGrid;

  connectedCallback() {
  }
  
  render(changes) {
    if (changes.icons) {
      // this.$grid.icons = this.icons;
      console.log(this.icons.length);
    }
  }
}