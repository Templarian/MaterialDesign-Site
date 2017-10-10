import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { IconService } from "app/shared/icon.service";

@Component({
  selector: 'mdi-icon-page',
  templateUrl: './iconPage.component.html',
  providers: [
    IconService
  ]
})
export class IconPageComponent {
  constructor(
    private route: ActivatedRoute,
    private iconService: IconService) { }

  iconName: string = '...';

  ngOnInit() {
    const packageId: string = this.route.snapshot.data['package'];
    const iconName: string = this.route.snapshot.params['iconName'];
    this.iconService.getIconByName(packageId, iconName).subscribe(icon => {
      this.iconName = icon.name;
    });
  }

}