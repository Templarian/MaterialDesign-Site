import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdi-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  
  @Input('title') name: string = 'Loading...';
  subtitle: string = null;

}
