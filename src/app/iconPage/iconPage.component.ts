import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

import { IconService } from "app/shared/icon.service";
import { Icon } from 'app/shared/models/icon.model';
import { Package } from '../shared/models/package.model';

@Component({
  selector: 'mdi-icon-page',
  templateUrl: './iconPage.component.html',
  styleUrls: ['./iconPage.component.scss'],
  providers: [
    LoginService,
    IconService
  ]
})
export class IconPageComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private iconService: IconService
  ) { }

  loaded: boolean = false;
  icon: Icon = new Icon('Loading...', 'M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z');
  isAuthed: boolean = false;

  async ngOnInit() {
    const packageId: string = this.route.snapshot.data['package'];
    const iconName: string = this.route.snapshot.params['iconName'];
    this.isAuthed = await this.loginService.isAuthed();
    
    let icon = await this.iconService.getIconByName(packageId, iconName)
    this.icon = icon;
    this.loaded = true;
  }

  isVector: boolean = true;
  setVector () {
    this.isVector = true;
  }

  setRaster () {
    this.isVector = false;
  }

  onAddAlias() {
    this.router.navigateByUrl('/admin/alias')
  }

  onEditIcon() {
    const packageId: string = this.route.snapshot.data['package'];
    this.router.navigateByUrl('/admin/icons', {
      queryParams: {
        package: new Package(packageId),
        icon: this.icon
      }
    })
  }

  onAddIcon() {
    
  }

}