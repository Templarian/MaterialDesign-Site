import { Component } from '@angular/core';

@Component({
  selector: 'mdi-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.scss']
})
export class CarbonComponent {
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
