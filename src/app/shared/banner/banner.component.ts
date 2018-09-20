import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdi-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  
  @Input('title') name: string = 'Loading...';
  @Input('icon') data: string = null;
  @Input('carbon') carbon: boolean;
  subtitle: string = null;

  isLocal: boolean = window.location.href.match(/localhost/) !== null

  ngAfterViewInit() {
    if (!this.isLocal) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.id = '_carbonads_js';
      s.src = '//cdn.carbonads.com/carbon.js?serve=CKYIPKJW&placement=materialdesigniconscom';
      document.getElementById('carbon').appendChild(s);
    }
  }
}
