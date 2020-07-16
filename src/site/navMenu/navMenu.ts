import { Component, Prop, Part } from '@mdi/element';
 
import template from "./navMenu.html";
import style from './navMenu.css';
import MdiIcon from '@mdi/components/mdi/icon';

const menuCategories = [
  'Guides',
  'Contribute',
  'Meta'
];

@Component({
  selector: 'site-nav-menu',
  style,
  template 
})
export default class SiteNavMenu extends HTMLElement {
  @Prop() items: any[] = [];
  @Prop() slug: string = '';

  @Part() $items: HTMLDivElement;

  connectedCallback() {
    
  }
  
  render(changes) {
    if (changes.items) {
      const sections = {};
      this.items.filter(x => menuCategories.includes(x.type)).forEach(item => {
        console.log(item.type, sections)
        if (!sections[item.type]) {
          const section = document.createElement('section');
          sections[item.type] = section;
          const aside = document.createElement('aside');
          aside.innerText = item.type;
          section.appendChild(aside);
          this.$items.appendChild(section);
        }
        const a = document.createElement('a');
        a.href = item.url;
        const icon = document.createElement('mdi-icon') as MdiIcon;
        icon.path = item.icon;
        a.appendChild(icon);
        const span = document.createElement('span');
        span.innerText = item.name;
        a.appendChild(span);
        var r = new RegExp(`${location.host}${item.url}(#.*)?$`)
        if (location.href.match(r) !== null) {
          a.classList.add('active');
        }
        sections[item.type].appendChild(a);
      });
    }
  }
}