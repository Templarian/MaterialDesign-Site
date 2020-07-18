import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageGithub.html";
import style from './pageGithub.css';

import '@mdi/components/mdi/markdown';
import MdiMarkdown from '@mdi/components/mdi/markdown';
import { Icon } from '@mdi/components/mdi/shared/models/icon';

const GITHUB_FILE = '/content/github.md';
 
@Component({
  selector: 'site-page-github',
  style,
  template 
})
export default class SitePageGithub extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $markdown: MdiMarkdown;
  @Part() $nav: HTMLUListElement;
  @Part() $header: HTMLHeadingElement;
  @Part() $edit: HTMLAnchorElement;
  @Part() $suggest: HTMLAnchorElement;

  ulIndent: HTMLLIElement[] = [];

  connectedCallback() {
    this.$markdown.file = GITHUB_FILE;
  }

  async render(changes) {
    
  }

  renderIcons() {
    
  }
}
