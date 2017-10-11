import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { IconService } from "app/shared/icon.service";

@Component({
  selector: 'mdi-icon-page',
  templateUrl: './iconPage.component.html',
  styleUrls: ['./iconPage.component.scss'],
  providers: [
    IconService
  ]
})
export class IconPageComponent {
  constructor(
    private route: ActivatedRoute,
    private iconService: IconService) { }

  iconName: string = '...';
  data: string = 'M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z';

  ngOnInit() {
    const packageId: string = this.route.snapshot.data['package'];
    const iconName: string = this.route.snapshot.params['iconName'];
    this.iconService.getIconByName(packageId, iconName).subscribe(icon => {
      this.iconName = icon.name;
      this.data = icon.data;
    });
  }

}