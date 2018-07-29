import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'header[mdi-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  public name = 'Material Design Icons';
  public isNav = true;
  public isHome = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.isNav = true;
      if (val instanceof NavigationEnd) {
        this.isHome = val.url === '/';
      }
    });
  }
}