import { Component } from '@angular/core';
import { Package } from 'app/shared/models/package.model';
import { ActivatedRoute } from '@angular/router';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';

@Component({
  selector: 'mdi-admin-base-page',
  templateUrl: './basePage.component.html',
  styleUrls: ['./basePage.component.scss'],
  providers: [
    IconService
  ]
})
export class AdminBasePageComponent {

  constructor(
    private iconService: IconService,
    private route: ActivatedRoute
  ) {
    this.packages.push(new Package("38EF63D0-4744-11E4-B3CF-842B2B6CFE1B", "Material Design Icons"));
    this.packages.push(new Package("531A9B44-1962-11E5-89CC-842B2B6CFE1B", "Material Design Icons Light"));
    const pack = this.route.snapshot.data['package'];
    if (pack) {
      this.selectedPackage = this.packages.find(p => p.id === pack.id);
    } else {
      this.selectedPackage = this.packages[0];
    }
  }

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public baseIcons: any[] = [];

  async selectPackage() {
    this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
    for (let i of this.icons) {
      const baseIcon = this.baseIcons.find(x => x.id === i.baseIconId);
      if (baseIcon) {
        baseIcon.icons.push(i);
        if (i.id === i.baseIconId) {
          baseIcon.icon = i;
        }
      } else {
        this.baseIcons.push({
          id: i.baseIconId,
          icon: i.id == i.baseIconId ? i : null,
          icons: [i]
        });
      }
    }
    console.log(this.baseIcons);
  }

  async ngOnInit() {
    await this.selectPackage();
  }

}