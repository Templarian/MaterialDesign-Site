export class SidebarItem {
  constructor (public icon: string,
               public text: string,
               public subText: string | null,
               public url: string,
               public hash: string,
               public subItems: SidebarItem[]) {
      
  }
}