import { Component } from '@angular/core';

@Component({
  selector: 'header[mdi-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  name = 'Material Design Icons';
}