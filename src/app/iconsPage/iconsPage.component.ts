import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IconService } from '../shared/icon.service';

@Component({
  selector: 'mdi-icons',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    IconService
  ]
})
export class IconsPageComponent {
  
  collapsed: boolean = false;
  size: number = 36;
  icons: any[] = [];
  errorMessage: any;

  constructor (private route: ActivatedRoute,
               private iconService: IconService) {
                
  }

  async loadContent (data) {
    let icons = await this.iconService.getIcons(data.package);
    this.icons = icons;
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(x => this.loadContent(x))
  }

}
