import { Component } from '@angular/core';

@Component({
  selector: 'context-menu',
  templateUrl: './contextMenu.component.html',
  styleUrls: ['./contextMenu.component.scss']
})
export class ContextMenuComponent  {
  menu: Menu[] = [];

  constructor() {
    
  }
  
}

class Menu {
    name: string = 'error';
    icon: string = null;
    menu: Menu[] = [];
}