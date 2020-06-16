import { Component } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';
import { Alias } from 'app/shared/models/alias.model';
import { Tag } from 'app/shared/models/tag.model';
import { DatabaseService } from 'app/shared/database.service';
import { Router } from '@angular/router';
import { Font } from 'app/shared/models/font.model';

@Component({
  selector: 'mdi-admin-indexeddb-page',
  templateUrl: './indexeddbPage.component.html',
  styleUrls: ['./indexeddbPage.component.scss'],
  providers: [
    LoginService,
    DatabaseService
  ]
})
export class AdminIndexeddbPageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public aliasName: string = '';

  public disabledTag: boolean = false;

  constructor(
    private loginService: LoginService,
    private databaseService: DatabaseService,
    private router: Router
  ) {
    
  }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
  }

  goBack () {
    this.router.navigateByUrl('/admin/index')
  }

  async logout () {
    await this.loginService.logout();
  }

  isProcessing = false;
  isSynced = false;

  async sync() {
    this.isProcessing = true;
    await this.databaseService.sync();
    this.isProcessing = false;
    this.isSynced = true;
  }

  async where() {
    this.isProcessing = true;
    const icon = await this.databaseService.getIconByName('account');
    console.log(icon);
    this.isProcessing = false;
  }

  async delete() {
    this.isProcessing = true;
    await this.databaseService.delete();
    window.location.reload();
    this.isProcessing = false;
  }

  search = '';
  icon: Icon | null = null;

  async keyup() {
    this.isProcessing = true;
    const icon = await this.databaseService.getIconByName(this.search);
    this.icon = icon;
    this.isProcessing = false;
  }

  async all() {
    console.log('get all icons...')
    this.icons = await this.databaseService.getIcons();
    console.log(this.icons.length, '...done')
  }

  async allSync() {
    await this.databaseService.sync();
    this.icons = await this.databaseService.getIcons();
    this.isSynced = true;
  }

  placeholders: Icon[] = [];
  async allPlaceholders() {
    this.placeholders = await this.databaseService.getIcons();
  }

  searchTerm = '';
  async keyup2() {
    this.isProcessing = true;
    const icons = await this.databaseService.getIcons(this.searchTerm);
    this.icons = icons;
    this.isProcessing = false;
  }

  async clear() {
    this.icons = [];
  }

  async render() {
    for (var i = 0; i < 250; i++) {
      await this.renderRow();
    }
  }

  setAll() {
    const all = document.getElementsByTagName('path');
    for (let path of all as any) {
      path.setAttribute('d', 'M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,14C14.42,14 18,15.79 18,18V20H2V18C2,15.79 5.58,14 10,14M20,12V7H22V12H20M20,16V14H22V16H20Z');
    }
  }

  x = 0;
  y = 0;
  svg = 'http://www.w3.org/2000/svg';
  renderRow() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        for (let x = 0; x < 20; x++) {
          const svg = document.createElementNS(this.svg, 'svg');
          svg.setAttribute('viewBox', '0 0 24 24');
          const path = document.createElementNS(this.svg, 'path');
          path.setAttribute('d', 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z');
          svg.appendChild(path);
          svg.addEventListener('mouseenter', () => {
            path.setAttribute('d', 'M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,14C14.42,14 18,15.79 18,18V20H2V18C2,15.79 5.58,14 10,14M20,12V7H22V12H20M20,16V14H22V16H20Z');
          });
          document.getElementById('foo').appendChild(svg);
        }
        resolve();
      });
    });
  }

}