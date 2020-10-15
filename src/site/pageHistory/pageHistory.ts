import { Component, Prop, Part } from '@mdi/element';

import template from "./pageHistory.html";
import style from './pageHistory.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { Modification } from '@mdi/components/mdi/shared/models/modification';
import { ModificationType } from '@mdi/components/mdi/shared/enums/modificationType';
import { http } from '@mdi/components/mdi/shared/http';
import '@mdi/components/mdi/card';
import '@mdi/components/mdi/button';
import '@mdi/components/mdi/inputCheck';
import MdiButton from '@mdi/components/mdi/button';
import MdiInputCheck from '@mdi/components/mdi/inputCheck';

@Component({
  selector: 'site-page-history',
  style,
  template
})
export default class SitePageHistory extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];

  @Part() $header: HTMLHeadingElement;
  @Part() $loading: HTMLDivElement;
  @Part() $error: HTMLDivElement;
  @Part() $icon: HTMLDivElement;
  @Part() $more: MdiButton;

  @Part() $news: MdiInputCheck;
  @Part() $iconCreated: MdiInputCheck;
  @Part() $iconModified: MdiInputCheck;
  @Part() $iconRenamed: MdiInputCheck;
  @Part() $iconDeleted: MdiInputCheck;
  @Part() $iconAliasCreated: MdiInputCheck;

  types: Array<[string, boolean, ModificationType[]]> = [
    ['news', true, [ModificationType.News]],
    ['iconCreated', true, [ModificationType.IconCreated]],
    ['iconModified', true, [ModificationType.IconModified]],
    ['iconRenamed', true, [ModificationType.IconRenamed]],
    ['iconDeleted', true, [ModificationType.IconDeleted]],
    ['iconAliasCreated', false, [ModificationType.IconAliasCreated, ModificationType.IconAliasDeleted]],
    ['iconTagCreated', false, [ModificationType.IconTagCreated, ModificationType.IconTagDeleted]],
  ];

  connectedCallback() {
    this.types.forEach((type) => {
      this[`$${type[0]}`].addEventListener('change', this.handleToggle.bind(this));
      this[`$${type[0]}`].value = type[1];
    });
    this.load();
  }

  async load() {
    const modifications = await this.requestPage(1);
    console.log(modifications);
    /*const icon = await http.get<Icon>(`/api/package/${packageId}/name/${name}`);
    const { error } = icon as any;
    this.$loading.style.display = 'none';
    if (error) {
      this.$error.style.display = 'block';
    } else {
      const related = await http.get<Icon[]>(`/api/icon/${icon.id}/base`);
      this.$icon.style.display = 'block';
    }*/
  }

  handleToggle(e: MouseEvent) {
    const target = e.target as MdiInputCheck;
    const part = target.getAttribute('part');
    const type = this.types.find(t => t[0] === part);
    if (type) {
      type[1] = target.value as boolean;
    }
    this.load();
  }

  async requestPage(page: number) {
    const size = 100;
    const types = this.types.reduce(
      function (arr: string[], t) {
        if (t[1]) {
          arr.push(...t[2]);
        }
        return arr;
      },
      []
    );
    const modifications = (await http.get<Modification[]>(
      '/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B/modification',
      {
        params: {
          modificationId: types,
          page: `${page}`,
          size: `${size}`
        }
      })
    ).map(m => new modifications().from(m));
    return modifications;
  }
}