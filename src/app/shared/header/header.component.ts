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

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        //console.log(val instanceof NavigationEnd);
        this.isNav = true;
    });
  }
}