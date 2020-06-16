import { Component, Prop, Part } from '@mdi/element';
import { Router } from './utils';

import '@mdi/components/mdi/annoy';
import '@mdi/components/mdi/database';
import '@mdi/components/mdi/icon';
import '@mdi/components/mdi/header';
import '@mdi/components/mdi/search';
import MdiDatabase from '@mdi/components/mdi/database';
import MdiSearch from '@mdi/components/mdi/search';

import template from "./router.html";
import style from './router.css';

const navigationItems = [
  { type: 'Documentation', name: 'Android', url: '/getting-started/android' },
  { type: 'Documentation', name: 'Angular', url: '/getting-started/angular' },
  { type: 'Documentation', name: 'AngularJS', url: '/getting-started/angularjs' },
  { type: 'Documentation', name: 'Bootstrap', url: '/getting-started/bootstrap' },
  { type: 'Documentation', name: 'Bootstrap v3', url: '/getting-started/bootstrap-3' },
  { type: 'Documentation', name: 'Ember', url: '/getting-started/ember' },
  { type: 'Documentation', name: 'PHP', url: '/getting-started/php' },
  { type: 'Documentation', name: 'Polymer', url: '/getting-started/polymer' },
  { type: 'Documentation', name: 'React', url: '/getting-started/react' },
  { type: 'Documentation', name: 'Rollup.js', url: '/getting-started/rollupjs' },
  { type: 'Documentation', name: 'Ruby on Rails', url: '/getting-started/ruby-on-rails' },
  { type: 'Documentation', name: 'SVG', url: '/getting-started/svg' },
  { type: 'Documentation', name: 'VueJS', url: '/getting-started/vuejs' },
  { type: 'Documentation', name: 'Webpack', url: '/getting-started/webpack' },
  { type: 'Documentation', name: 'Webfont', url: '/getting-started/webfont' },
  { type: 'Documentation', name: 'Windows', url: '/getting-started/windows' },
  { type: 'Documentation', name: 'Xamarin', url: '/getting-started/xamarin' },
  { type: 'Documentation', name: 'VS Code', url: '/getting-started/visual-studio-code' },
  { type: 'Documentation', name: 'Foo Angular Foo Angular', url: '/getting-started/bootstraps' }
];

@Component({
  selector: 'site-router',
  style,
  template
})
export default class SiteRouter extends HTMLElement {
  @Part() $container: HTMLDivElement;
  @Part() $search: MdiSearch;
  @Part() $database: MdiDatabase;

  router: any = null;
  page: any = null;

  fontId = 'D051337E-BC7E-11E5-A4E9-842B2B6CFE1B';

  connectedCallback() {
    this.$database.addEventListener('sync', async (e: any) => {
      const { db } = e.detail;
      this.sync(db);
    });
    this.$database.font = this.fontId;
    this.$search.items = navigationItems;

    this.router = new Router({
      mode: 'history',
      page404: (path) => {
        console.log('"/' + path + '" Page not found');
      }
    });

    this.router.add('', () => {
      this.updatePage('home');
    });

    this.router.add('icon/(:any)', () => {
      this.updatePage('icons');
    });

    this.router.add('icon/(:any)', (name) => {
      console.log('Icon, ' + name);
      this.updatePage('icon');
      this.page.name = name;
    });

    this.router.add('getting-started/(:any)', () => {
      this.updatePage('view');
    });

    this.router.addUriListener();

    this.router.check();
  }

  async sync(db) {
    const count = await db.getCount(this.fontId);
    console.log('Total Icons', count);
    const icons = await db.getIcons(this.fontId);
    console.log('Icon Objects:', icons.length);
    // Search
    this.$search.icons = icons;
  }

  updatePage(page: string) {
    // Remove any current pages
    if (this.page) {
      this.page.remove();
    }
    // Add New Page
    console.log(`site-page-${page}`);
    this.page = document.createElement(`site-page-${page}`);
    this.$container.appendChild(this.page);
  }
}