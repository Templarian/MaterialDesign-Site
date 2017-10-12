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

  loadContent (data) {
    this.iconService.getIcons(data.package).subscribe(icons => {
      this.icons = icons;
    }, e => this.errorMessage = e);
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(x => this.loadContent(x))
  }

}
