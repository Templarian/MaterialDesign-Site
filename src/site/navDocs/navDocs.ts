import { Component, Prop, Part } from '@mdi/element';
 
import template from "./navDocs.html";
import style from './navDocs.css';
import MdiIcon from '@mdi/components/mdi/icon';

@Component({
  selector: 'site-nav-docs',
  style,
  template 
})
export default class SiteNavDocs extends HTMLElement {
  @Prop() items: any[] = [];
  @Prop() slug: string = '';

  @Part() $items: HTMLDivElement;

  connectedCallback() {
    
  }
  
  render(changes) {
    if (changes.items) {
      this.items.filter(x => x.type === 'Documentation' && x.name !== 'Documentation').forEach(item => {
        if (item.url === '/getting-started') {
          return;
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
        this.$items.appendChild(a);
      });
    }
  }
}