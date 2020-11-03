import { Component, Prop, Part } from '@mdi/element';

import template from "./pageHistory.html";
import style from './pageHistory.css';

import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { Modification } from '@mdi/components/mdi/shared/models/modification';
import { ModificationType } from '@mdi/components/mdi/shared/enums/modificationType';
import { http } from '@mdi/components/mdi/shared/http';
import '@mdi/components/mdi/card';
import '@mdi/components/mdi/button';
import '@mdi/components/mdi/inputCheckList';
import MdiButton from '@mdi/components/mdi/button';
import MdiInputCheckList from '@mdi/components/mdi/inputCheckList';

const NEWS = 'news';
const ICON_CREATED = 'iconCreated';
const ICON_MODIFIED = 'iconModified';
const ICON_RENAMED = 'iconRenamed';
const ICON_DELETED = 'iconDeleted';
const ICON_ALIAS = 'iconAlias';
const ICON_TAG = 'iconTag';

const filters = {
  [NEWS]: [ModificationType.News],
  [ICON_CREATED]: [ModificationType.IconCreated],
  [ICON_MODIFIED]: [ModificationType.IconModified],
  [ICON_RENAMED]: [ModificationType.IconRenamed],
  [ICON_DELETED]: [ModificationType.IconDeleted],
  [ICON_ALIAS]: [ModificationType.IconAliasCreated, ModificationType.IconAliasDeleted],
  [ICON_TAG]: [ModificationType.IconTagCreated, ModificationType.IconTagDeleted]
}

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

  @Part() $filters: MdiInputCheckList;

  connectedCallback() {
    this.$filters.value = [
      NEWS,
      ICON_CREATED,
      ICON_MODIFIED,
      ICON_RENAMED,
      ICON_DELETED
    ];
    this.$filters.options = [
      { label: 'News', value: NEWS },
      { label: 'Icon Created', value: ICON_CREATED },
      { label: 'Icon Modified', value: ICON_MODIFIED },
      { label: 'Icon Renamed', value: ICON_RENAMED },
      { label: 'Icon Deleted', value: ICON_DELETED },
      { label: 'Alias Icon', value: ICON_ALIAS },
      { label: 'Tag Icon', value: ICON_TAG }
    ];
    this.$filters.addEventListener('change', this.handleToggle.bind(this));
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
    this.load();
  }

  async requestPage(page: number) {
    const size = 100;
    const ids = this.$filters.value.reduce((arr, key) => {
      return [...arr, ...filters[key]];
    }, []);
    const modifications = (await http.get<Modification[]>(
      '/api/package/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B/modification',
      {
        params: {
          modificationId: ids,
          page: `${page}`,
          size: `${size}`
        }
      })
    ).map(m => new Modification().from(m));
    return modifications;
  }
}