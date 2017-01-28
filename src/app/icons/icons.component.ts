import { Component, Input } from '@angular/core';
import { IconService } from '../shared/icon.service'

@Component({
  selector: 'mdi-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  providers: [
    IconService
  ]
})
export class IconsComponent {
  
  icons: any[] = [];
  errorMessage: any;

  constructor (private iconService: IconService) {
    iconService.getIcons('38EF63D0-4744-11E4-B3CF-842B2B6CFE1B').subscribe(icons => {
      this.icons = icons;
    }, e => this.errorMessage = e);
  }

}
