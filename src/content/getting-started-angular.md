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
export class IconComponent {
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

Tested versioned releases can be used through NPM documented [here](https://www.npmjs.com/package/@mdi/angular-material).

```
npm install @mdi/angular-material
```

Or if you want the latest WIP straight from the database it can be downloaded via the button below. Note: this includes WIP icons that could change, so we highly recommend using the versioned NPM package above.

<a href="https://materialdesignicons.com/api/download/angularmaterial/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B" class="button">icon:download Angular 2+ Download for Angular Material 'mdi.svg'</a>

### Step-by-step Usage

(Note: Documentation for Angular CLI versions 1.x.x (around Angular v5) has been dropped
as Angular v5 is [no longer supported](https://angular.io/guide/releases#support-policy-and-schedule).)

#### 1. Including the icons into your app

This bundle is usable with Angular Material and to facilitate usage, it's recommended to use
[`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin).

Add the following plugin configuration in the Webpack configuration:

```javascript
new CopyWebpackPlugin([
  { from: 'node_modules/@mdi/angular-material/mdi.svg',
    to: 'assets/mdi.svg'
  }
]);
```

Or if you're using the Angular CLI, make sure to include `mdi.svg` in your `assets`
folder under the [Angular workspace configuration file](https://angular.io/guide/workspace-config)
in the `assets` array, located in the build configuration for your project:

```json
{
  // ...
  "architect": {
    "build": {
      "options": {
        "assets": [
          { "glob": "**/*", "input": "./assets/", "output": "./assets/" },
          { "glob": "favicon.ico", "input": "./", "output": "./" },
          { "glob": "mdi.svg", "input": "./node_modules/@mdi/angular-material", "output": "./assets" }
        ]
      }
    }
  }
  // ...
}
```

Note that the input directory is dependent on the workspace root which can be found
by looking at your desired project's `root` property. (For more information, visit the
Angular documentation on [project configuration options](https://angular.io/guide/workspace-config#project-configuration-options).)

Additionally, see the Angular documentation on [assets configuration](https://angular.io/guide/workspace-config#assets-configuration)
for more information.

#### 2. Adding the icons to your app

The `mdi.svg` contains all the icons provided on the site. It can be used inline with
[MatIconRegistry](https://material.angular.io/components/icon/api#MatIconRegistry).

1. In your app's main module (typically `app.module.ts`), import `MatIconModule` from
`@angular/material/icon` and `HttpClientModule` from `@angular/common/http`
(`HttpClientModule` is needed for the icon set to be loaded correctly):

    ```typescript
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { MatIconModule } from '@angular/material/icon';

    @NgModule({
      imports: [
        // ...
        HttpClientModule,
        MatIconModule
      ]
    })
    export class AppModule {}
    ```

2. Register the icons with `MatIconRegistry#addSvgIconSet`, passing in the necessary
resource URL to be added:

    ```typescript
    import { MatIconRegistry } from '@angular/material/icon';
    import { DomSanitizer } from '@angular/platform-browser';

    // ...
    export class AppModule {
      constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        iconRegistry.addSvgIconSet(
          domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
        );
      }
    }
    ```

Tha final main module should look like this:

```typescript
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // Required by the Angular Material icon module
    HttpClientModule,
    // ...
    MatIconModule
  ]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
```

#### 3. Using the icons in your app

The icons can be used with [`<mat-icon>`](https://material.angular.io/components/icon/api#MatIcon)'s
`svgIcon` attribute as shown below:

```html
<mat-icon svgIcon="<name of icon>"></mat-icon>
```

For more information about SVG icons, check out the [documentation](https://material.angular.io/components/icon/overview#svg-icons).

---

[StackBlitz demo](https://stackblitz.com/edit/mdi-material-example)
