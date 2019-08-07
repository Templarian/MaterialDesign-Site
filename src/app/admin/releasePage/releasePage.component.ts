import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { IconService } from 'app/shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Modification } from 'app/shared/models/modification.model';
import { Tag } from 'app/shared/models/tag.model';
import { Router } from '@angular/router';
import { FontVersion } from 'app/shared/models/fontVersion.model';
import { Font } from 'app/shared/models/font.model';

@Component({
  selector: 'mdi-admin-release-page',
  templateUrl: './releasePage.component.html',
  styleUrls: ['./releasePage.component.scss'],
  providers: [
    LoginService,
    IconService
  ]
})
export class AdminReleasePageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public fonts: Font[] = [];
  public selectedFont: Font = null;
  public fontVersions: FontVersion[] = [];
  public selectedFontVersion: FontVersion = null;
  public editFontVersion: FontVersion = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public aliasName: string = '';
  public modifications: Modification[] = [];
  public iconsNoVersion: Icon[] = [];
  public iconsVersion: Icon[] = [];

  public disabledTag: boolean = false;

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Load Packages
    this.packages = await this.iconService.getAdminPackages();
    this.selectedPackage = this.packages[0];
    // Load Package
    this.selectPackage();
  }

  goBack() {
    this.router.navigateByUrl('/admin/index')
  }

  async logout() {
    await this.loginService.logout();
  }

  tags: Tag[] = [];

  selectedTag: Tag;

  previewIcons: Icon[] = [];

  async selectTag() {
    this.previewIcons = await this.iconService.getAdminIconsByTag(this.selectedPackage, this.selectedTag);
  }

  async selectPackage() {
    // Load Fonts
    this.fonts = await this.iconService.getAdminFonts(this.selectedPackage.id);
    this.selectedFont = this.fonts[0];
    // Load FontVersions
    this.fontVersions = this.selectedFont.versions;
    this.selectedFontVersion = this.fontVersions[0];
    await this.selectFont();
  }

  async selectFont() {
    this.iconsNoVersion = await this.iconService.getAdminFontNoVersion(this.selectedFont);
    await this.selectFontVersion();
  }

  async selectFontVersion() {
    this.iconsVersion = await this.iconService.getAdminFontVersion(this.selectedFontVersion);
    this.editFontVersion = new FontVersion().from(this.selectedFontVersion);
    await this.checkSvgCache();
    await this.checkFontCache();
  }

  async focusEmpty(icon: Icon) {
    if (!icon.codepoint) {
      var iconCodepoint = await this.iconService.getAdminFontNextCodepoint(this.selectedFont);
      icon.codepoint = iconCodepoint.codepoint;
    }
  }

  async assign(icon: Icon) {
    const updatedIcon = await this.iconService.setCodepoint(icon, this.selectedFontVersion);
    // Refresh lists
    await this.selectFont();
  }

  public isSvgBundleCached: boolean = false;
  public isGenerateSvgDisabled: boolean = false;
  public svgBundleCacheDate: string = null;

  async checkSvgCache() {
    const bundleCache = await this.iconService.getSvgBundleCacheDate(this.selectedFontVersion);
    this.isSvgBundleCached = true;
    if (bundleCache.isCached) {
      console.log('cache', bundleCache.date);
      this.svgBundleCacheDate = bundleCache.date.toLocaleString(DateTime.DATETIME_MED);
    } else {
      console.log('no cache');
      this.svgBundleCacheDate = null;
    }
  }

  async generateSvg() {
    this.isGenerateSvgDisabled = true;
    const success = await this.iconService.generateSvgBundle(this.selectedFontVersion);
    await this.checkSvgCache();
    this.isGenerateSvgDisabled = false;
  }

  downloadSvgBundle(): string {
    if (this.selectedFontVersion == null) { return ''; }
    return `/api/admin/font/version/${this.selectedFontVersion.id}/download/svg`;
  }

  public isFontBundleCached: boolean = false;
  public isGenerateFontDisabled: boolean = false;
  public fontBundleCacheDate: string = null;

  async checkFontCache() {
    const bundleCache = await this.iconService.getFontBundleCacheDate(this.selectedFontVersion);
    this.isFontBundleCached = true;
    if (bundleCache.isCached) {
      console.log('cache', bundleCache.date);
      this.fontBundleCacheDate = bundleCache.date.toLocaleString(DateTime.DATETIME_MED);
    } else {
      console.log('no cache');
      this.fontBundleCacheDate = null;
    }
  }

  async generateFont() {
    this.isGenerateFontDisabled = true;
    const success = await this.iconService.generateFontBundle(this.selectedFontVersion);
    await this.checkFontCache();
    this.isGenerateFontDisabled = false;
  }

  downloadFontBundle(): string {
    if (this.selectedFontVersion == null) { return ''; }
    return `/api/admin/font/version/${this.selectedFontVersion.id}/download/font`;
  }

  async updateFontVersion() {
    const fontVersion = await this.iconService.updateFontVersion(this.editFontVersion);
    this.editFontVersion.major = fontVersion.major;
    this.editFontVersion.minor = fontVersion.minor;
    this.editFontVersion.patch = fontVersion.patch;
    alert('Updated Font Version');
  }

}