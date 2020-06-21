import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcon.html";
import style from './pageIcon.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';

@Component({
  selector: 'site-page-icon',
  style,
  template 
})
export default class SitePageIcon extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  @Prop() name = '';
  
  @Part() $message: HTMLDivElement;
  
  render(changes) {
    if (changes.name) {
      this.$message.innerText = this.name;
    }
  }
}