import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageView.html";
import style from './pageView.css';

import '@mdi/components/mdi/buttonLink';
import MdiButtonLink from '@mdi/components/mdi/buttonLink';
import '@mdi/components/mdi/markdown';
import MdiMarkdown from '@mdi/components/mdi/markdown';
import { Icon } from '@mdi/components/mdi/shared/models/icon';

const mdiLinkVariant = 'M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z';
const mdiVanish = 'M16,13V11H21V13H16M14.83,7.76L17.66,4.93L19.07,6.34L16.24,9.17L14.83,7.76M11,16H13V21H11V16M11,3H13V8H11V3M4.93,17.66L7.76,14.83L9.17,16.24L6.34,19.07L4.93,17.66M4.93,6.34L6.34,4.93L9.17,7.76L7.76,9.17L4.93,6.34M8,13H3V11H8V13M19.07,17.66L17.66,19.07L14.83,16.24L16.24,14.83L19.07,17.66Z';

const mdiAlert = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';

const scrollToElement = function(ele) {
  if (ele.getBoundingClientRect().top > 100) {
    window.scrollTo({
      top: ele.getBoundingClientRect().top,
      behavior: 'smooth'
    });
  } else {
    setTimeout(() => {
      scrollToElement(ele);
    }, 100);
  }
};
 
@Component({
  selector: 'site-page-view',
  style,
  template 
})
export default class SitePageView extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  @Prop() slug = '';
  
  @Part() $markdown: MdiMarkdown;
  @Part() $nav: HTMLUListElement;
  @Part() $header: HTMLHeadingElement;
  @Part() $edit: MdiButtonLink;
  @Part() $suggest: MdiButtonLink;

  ulIndent: HTMLLIElement[] = [];

  connectedCallback() {
    this.$markdown.replace = [{
      find: new RegExp('\{\{version\}\}', 'g'),
      replace: (m) => {
        return '5.5.55';
      }
    }, {
      find: new RegExp('<h1>(.*)</h1>'),
      replace: (m, h1) => {
        // Prevent double setting title
        document.title = h1;
        this.$header.innerHTML = h1;
        this.$suggest.href = `https://github.com/Templarian/MaterialDesign-Site/issues/new?title=Suggested%20Change%20to%20%22${h1}%22&body=%3C%21--%20Describe%20how%20you%20would%20improve%20the%20documentation%20here%20--%3E`;
        return '';
      }
    }, {
      find: new RegExp('<(h[2-6])>(.+)</\\1>', 'g'),
      replace: (m1, m2, m3) => {
        const map = { h2: 2, h3: 3, h4: 4, h5: 5, h6: 6 };
        console.log(m1, m2, m3, map[m2]);
        // ToDo: actually use ul li structure
        const id = m3.toLowerCase().replace(/ /g, '-').replace(/\//, '');
        const li = document.createElement('li');
        li.classList.add(`indent-${map[m2]}`);
        const anchor = document.createElement('a');
        anchor.href = `#${id}`;
        anchor.innerHTML = m3;
        li.appendChild(anchor);
        this.$nav.appendChild(li);
        return `<${m2}>
                  ${m3}
                  <a href="#${id}" style="display:inline-block;">
                    <svg viewBox="0 0 24 24" style="width:18px;height:18px;">
                      <path d="${mdiLinkVariant}" fill="currentColor" />
                    </svg>
                  </a>
                </${m2}>`;
      }
    }, {
      find: new RegExp('(\\\\mdi|mdi|icon):([a-z0-9-]+):?([#a-z0-9-]+)?', 'g'),
      replace: (m, type, icon, color) => {
        if (type == '\\mdi') { return `mdi:${icon}`; }
        if (icon == 'not' || icon == 'before') { return m; }
        const c = color ? ` style="fill:${color}"` : '';
        if (type === 'mdi') {
          return `<a href="icon/${icon}" class="icon"><svg class="icon" data-type="link" viewBox="0 0 24 24"><path data-icon="${icon}" fill="currentColor" d="${mdiVanish}"${c} /></svg></a>`;
        } else {
          return `<svg class="icon" data-type="icon" viewBox="0 0 24 24"><path data-icon="${icon}" fill="currentColor" d="${mdiVanish}"${c} /></svg>`;
        }
      }
    }, {
      find: new RegExp('<blockquote>([\\\s\\\S]*?)<\\\/blockquote>', 'g'),
      replace: (m) => {
        const matchLabel = m.match(/<blockquote>\r?\n?<p><strong>([\w ]+):</);
        if (matchLabel) {
          const label = matchLabel[1];
          const classLabel = matchLabel[1].trim().toLowerCase().replace(/[ _]/g, '-');
          m = m.replace(new RegExp(`<strong>${label}:</strong> ?`), '');
          m = m.replace(/^<blockquote/, `<blockquote class="${classLabel}"`);
        }
        return m;
      }
    }];
    this.$markdown.modify(($content) => {
      const hash = window.location.hash;
      const ele = $content.querySelector(`[href="${hash}"]`);
      if (ele) {
        scrollToElement(ele);
      }
    });
    this.$markdown.addEventListener('load', (e: any) => {
      this.initText = true;
      this.renderIcons();
    });
  }

  async render(changes) {
    if (changes.slug && this.slug) {
      var match = this.navigationItems.find(item => {
        return item.url.indexOf(this.slug) !== -1;
      });
      var file = match ? match.file : '/content/404.md';
      this.$markdown.file = file;
      this.$edit.href = `https://github.com/Templarian/MaterialDesign-Site/tree/master/src/${file}`;
    }
    if (changes.icons) {
      this.initIcons = true;
      this.renderIcons();
    }
  }

  initText = false;
  initIcons = false;
  renderIcons() {
    if (this.initText && this.initIcons) {
      var { $content } = this.$markdown;
      var paths = $content.querySelectorAll('[data-icon]');
        for (var i = 0; i < paths.length; i++) {
          var path = paths[i] as SVGPathElement;
          var icon = this.icons.find(i => i.name == path.dataset.icon);
          path.setAttribute('d', icon ? icon.data || mdiAlert : mdiAlert);
        }
    }
  }
}
