import { Component, Prop, Part } from '@mdi/element';
 
import template from "./carbon.html";
import style from './carbon.css';

@Component({
  selector: 'site-carbon',
  style,
  template 
})
export default class SiteCarbon extends HTMLElement {
  @Part() $carbon: HTMLDivElement;

  connectedCallback() {
    
  }
  
  render(changes) {
    
  }
}