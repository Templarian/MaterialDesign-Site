# Angular - Getting Started

> This getting started guide is still very much a work in progress.

## Custom Component

We're still in the process of writing a first party library. Until then a component could be as simple as below.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <svg version="1.1" viewBox="0 0 24 24" style="display:inline-block;width:1.5rem">
        <path [attr.d]="data" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
    </svg>
  `
})
export class IconComponent  {
    @Input('path') data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
}
```

```typescript
import { Component } from '@angular/core';
import { mdiAccount } from '@mdi/js';

@Component({
  selector: 'app',
  template: `
    <div>
      <icon path="mdiAccount"></icon>
    </div>
  `
})
export class AppComponent  {
    mdiAccount: string = mdiAccount;
}
```

## Angular Material

```
npm install @mdi/angular-material
```

Or...

<a href="https://materialdesignicons.com/api/download/angularmaterial/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B" class="btn btn-secondary">icon:download Angular 2+ Download for Angular Material 'mdi.svg'</a>

The `mdi.svg` contains all the icons provided on the site. Use inline with [MatIconRegistry](https://material.angular.io/components/icon/api).
The following assumes that you're using the latest version of `@angular/material` (`2.0.0-beta.12`) and you already have the basic knowledge of Angular Material.
Place the SVG file under your `assets` folder. Please ensure that this file is publicly accessible.
In your app's module file (typically `app.module.ts`), import `MatIconModule` and `MatIconRegistry` from `@angular/material`:

```typescript App module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
/*
From the latest master, HttpClientModule is required instead
import { HttpClientModule } from '@angular/common/http';
*/

...
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // From the latest master, HttpClientModule is required instead
    // Your other modules
    // Take note that you have to import MatIconModule into your app
    MatIconModule
  ]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
```

If you're using Angular CLI, make sure to include `assets` folder under `.angular-cli.json` in `assets` array (Although by default, the angular CLI will autofill it in):

```json
{
   "apps": [
     {
       "assets": [
         "assets"
       ]
     }
   ]
}
```
Usage:

```html
<!-- Icon by itself -->
<mat-icon svgIcon="android"></mat-icon>
<!-- Icon button -->
<button mat-icon-button>
  <mat-icon svgIcon="android"></mat-icon>
</button>
<!-- You can also combine an icon and text together -->
<button mat-button>
  <mat-icon svgIcon="code-tags"></mat-icon>
  View source
</button>
```

Please also add the following class to your styles (`styles.css`) to solve the problem where an icon isn't aligned properly when used in a menu item:

```css
button.mat-menu-item {
  line-height: 24px !important;
}
a.mat-menu-item > mat-icon {
  margin-bottom: 14px;
}
.mat-icon svg {
  height: 24px;
  width: 24px;
}
```

[Demo](https://stackblitz.com/edit/mdi-material-example)

For more information on icons, refer to the [icon docs](https://material.angular.io/components/icon/overview).
