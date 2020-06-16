import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcon.html";
import style from './pageIcon.css';

@Component({
  selector: 'site-page-icon',
  style,
  template 
})
export default class SitePageIcon extends HTMLElement {
  @Prop() name = '';
  
  @Part() $message: HTMLDivElement;
  
  render(changes) {
    if (changes.name) {
      this.$message.innerText = this.name;
    }
  }
}