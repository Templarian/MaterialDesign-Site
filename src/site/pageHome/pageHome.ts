import { Component, Prop, Part } from '@mdi/element';

import template from "./pageHome.html";
import style from './pageHome.css';
import { Icon } from '@mdi/components/mdi/shared/models/icon';


 
@Component({
  selector: 'site-page-home',
  style,
  template 
})
export default class SitePageHome extends HTMLElement {  
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  render(changes) {

  }
}