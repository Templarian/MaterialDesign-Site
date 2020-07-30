import { Component, Prop, Part } from '@mdi/element';
import { Router } from './../shared/router';
import SiteNavDocs from './../navDocs/navDocs';
import SiteNavMenu from './../navMenu/navMenu';
import { navigationItems } from './constants';

import '@mdi/components/mdi/annoy';
import '@mdi/components/mdi/database';
import '@mdi/components/mdi/icon';
import '@mdi/components/mdi/header';
import '@mdi/components/mdi/search';
import '@mdi/components/mdi/tooltip';
import MdiTooltip from '@mdi/components/mdi/tooltip';
import MdiDatabase from '@mdi/components/mdi/database';
import MdiSearch from '@mdi/components/mdi/search';

import template from "./router.html";
import style from './router.css';
import { http } from '@mdi/components/mdi/shared/http';

@Component({
  selector: 'site-router',
  style,
  template
})
export default class SiteRouter extends HTMLElement {
  @Part() $container: HTMLDivElement;
  @Part() $search: MdiSearch;
  @Part() $database: MdiDatabase;
  @Part() $siteNavDocs: SiteNavDocs;
  @Part() $siteNavMenu: SiteNavMenu;
  @Part() $navDocs: HTMLAnchorElement;
  @Part() $navIcons: HTMLAnchorElement;
  @Part() $menu: HTMLButtonElement;
  @Part() $and: HTMLSpanElement;
  @Part() $tooltip: MdiTooltip;

  router: any = null;
  page: any = null;
  docsOpen = false;
  menuOpen = false;

  fontId = 'D051337E-BC7E-11E5-A4E9-842B2B6CFE1B';

  connectedCallback() {
    this.$database.addEventListener('sync', async (e: any) => {
      const { db } = e.detail;
      this.sync(db);
    });
    this.$database.font = this.fontId;
    this.$search.addEventListener('focus', this.handleFocusSearch.bind(this));
    this.$search.items = navigationItems.filter(x => !x.hideInSearch);
    this.$siteNavDocs.items = navigationItems;
    this.$siteNavMenu.items = navigationItems;
    this.$navIcons.addEventListener('click', this.handleNavIcons.bind(this));
    this.$navDocs.addEventListener('click', this.handleNavDocs.bind(this));
    this.$menu.addEventListener('click', this.handleMenu.bind(this));
    this.$container.addEventListener('tooltip', this.handleTooltip.bind(this));

    this.router = new Router({
      mode: 'history',
      page404: (path) => {
        console.log('"/' + path + '" Page not found');
      }
    });
    // Home Page
    this.router.add('', () => {
      this.updatePage('home');
    });
    // History Page
    this.router.add('history', () => {
      this.updatePage('history');
    });
    // Icons
    this.router.add('icons', () => {
      this.updatePage('icons');
    });
    // Single Icon
    this.router.add('icon/(:any)', (name) => {
      console.log('Icon, ' + name);
      this.updatePage('icon');
      this.page.name = name;
    });
    // Markdown Pages
    this.router.add('documentation', () => {
      this.updatePage('view');
      this.page.slug = `documentation`;
    });
    this.router.add('changelog', () => {
      this.updatePage('view');
      this.page.slug = `changelog`;
    });
    this.router.add('upgrade', () => {
      this.updatePage('view');
      this.page.slug = `upgrade`;
    });
    this.router.add('contribute', () => {
      this.updatePage('view');
      this.page.slug = `contribute`;
    });
    this.router.add('contribute/github', () => {
      this.updatePage('github');
      this.page.slug = `contribute/github`;
    });
    this.router.add('contribute/(:any)', (slug) => {
      this.updatePage('view');
      this.page.slug = `contribute/${slug}`;
    });
    this.router.add('contribute/(:any)/(:any)', (slug1, slug2) => {
      this.updatePage('view');
      this.page.slug = `contribute/${slug1}/${slug2}`;
    });
    this.router.add('guide/(:any)', (slug) => {
      this.updatePage('view');
      this.page.slug = `guide/${slug}`;
    });
    this.router.add('getting-started/(:any)', (slug) => {
      this.updatePage('view');
      this.page.slug = `getting-started/${slug}`;
    });

    this.router.addUriListener();

    this.router.check();

    this.and();
  }

  async and() {
    const and: string = await http.asset('/content/and.md');
    const messages: string[] = and.split(/\r?\n/);

    // shuffle and resize array in-place
    const size = Math.min(3, messages.length);
    const lastIndex = messages.length - 1;
    let index = -1;
    while (++index < size) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = messages[rand];
      messages[rand] = messages[index];
      messages[index] = value;
    }
    messages.length = size;

    this.$and.innerHTML = messages
      .map(m => ` <span>${m.replace('- ', '')}</span>`)
      .join('');
  }

  async sync(db) {
    const count = await db.getCount(this.fontId);
    console.log('Total Icons', count);
    const icons = await db.getIcons(this.fontId);
    console.log('Icon Objects:', icons.length);
    // Search
    this.$search.icons = icons;
    // All Pages
    this.page.icons = icons;
  }

  handleFocusSearch() {
    this.docsOpen = false;
    this.menuOpen = false;
    this.render();
  }

  handleNavIcons() {

  }

  handleNavDocs(e) {
    this.docsOpen = !this.docsOpen;
    this.menuOpen = false;
    this.render();
    e.preventDefault();
  }

  handleMenu(e) {
    console.log(this.menuOpen)
    this.docsOpen = false;
    this.menuOpen = !this.menuOpen;
    this.render();
    e.preventDefault();
  }

  updatePage(page: string) {
    // Remove any current pages
    if (this.page) {
      this.page.remove();
    }
    // Add New Page
    console.log(`site-page-${page}`);
    this.page = document.createElement(`site-page-${page}`);
    this.page.navigationItems = navigationItems;
    this.$container.appendChild(this.page);
  }

  /**
   * Global tooltip
   */
  handleTooltip(e) {
    console.log(e.detail)
    var { visible, rect, text } = e.detail;
    this.$tooltip.visible = visible;
    this.$tooltip.rect = rect;
    this.$tooltip.text = text;
  }

  render(changes?: any) {
    this.$siteNavDocs.style.display = this.docsOpen ? '' : 'none';
    this.$siteNavMenu.style.display = this.menuOpen ? '' : 'none';
    this.$navDocs.classList.toggle('active', this.docsOpen);
    this.$menu.classList.toggle('active', this.menuOpen);
  }
}