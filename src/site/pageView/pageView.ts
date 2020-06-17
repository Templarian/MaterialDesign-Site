import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageView.html";
import style from './pageView.css';

import '@mdi/components/mdi/markdown';
import MdiMarkdown from '@mdi/components/mdi/markdown';
import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { http } from '@mdi/components/mdi/shared/http';

const map = {
  'getting-started/react': '/content/getting-started-react.md'
};
 
@Component({
  selector: 'site-page-view',
  style,
  template 
})
export default class SitePageView extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() slug = '';
  
  @Part() $markdown: MdiMarkdown;
  
  async render(changes) {
    if (changes.slug) {
      this.$markdown.text = await http.asset(map[this.slug]);
    }
  }
}