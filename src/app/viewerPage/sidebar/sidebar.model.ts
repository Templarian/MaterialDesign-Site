import { SidebarItem } from './sidebarItem.model';

export class Sidebar {

  constructor (public url: string,
               public items: SidebarItem[]) {
      
  }

}