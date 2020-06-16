import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageView.html";
import style from './pageView.css';
 
@Component({
  selector: 'site-page-view',
  style,
  template 
})
export default class SitePageView extends HTMLElement {
  @Prop() message = 'Hello World';
  
  @Part() $message: HTMLDivElement;
  
  render(changes) {
    if (changes.message) {
      this.$message.innerText = this.message;
    }
  }
}