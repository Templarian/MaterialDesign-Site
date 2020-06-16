import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageIcons.html";
import style from './pageIcons.css';

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
  //@Part() $grid: MdiGrid;
  
  render(changes) {
  }
}