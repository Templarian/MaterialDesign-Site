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

}