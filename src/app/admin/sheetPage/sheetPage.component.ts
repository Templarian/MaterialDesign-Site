import { Component } from '@angular/core';
import { Package } from 'app/shared/models/package.model';
import { ActivatedRoute } from '@angular/router';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';

@Component({
  selector: 'mdi-admin-sheet-page',
  templateUrl: './sheetPage.component.html',
  styleUrls: ['./sheetPage.component.scss'],
  providers: [
    IconService
  ]
})
export class AdminSheetPageComponent {

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
  public rows: number = 40;
  public columns: number = 52;
  public iRows: number[] = [];
  public iColumns: number[] = [];
  public width: number = 100;
  public height: number = 100;
  public posterWidth: number = 24;
  public posterHeight: number = 36;
  public posterBleed: number = 0.5;
  public posterTitle: string = "Material Design Icons";

  async selectPackage() {
    this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
  }

  async ngOnInit() {
    await this.selectPackage();
    this.update();
  }

  update() {
    this.iRows = Array(parseInt(this.rows as any)).fill(0).map((x, i) => i);
    this.iColumns = Array(parseInt(this.columns as any)).fill(0).map((x, i) => i);
    this.width = 24 * parseInt(this.columns as any);
    this.height = 24 * parseInt(this.rows as any);
  }

  getIcon(row, column) {
    row = parseInt(row);
    column = parseInt(column);
    const index = (row * this.columns) + column;
    if (index < this.icons.length) {
      return this.icons[index].data;
    } else {
      return 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
    }
  }

}