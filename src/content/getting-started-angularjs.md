# AngularJS - Getting Started

In AngularJS you will want to use a method that cleanly inserts [SVG](./svg) inline.

## Standalone Directive

If you need a standalone directive we suggest using the one below.

tabs:Standalone
tab:mdi-usage Usage
tab:mdi-code mdi.js
tabContent:mdi-usage

```html
<!-- After defining in mdiService.add('account', 'data here') -->
<mdi name="account"></mdi>
<!-- Or directly... -->
<mdi data="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></mdi>
```

```javascript
angular.module('app', ['mdi'])
.controller('exampleController', [
  'mdiService',
  function (mdiService) {
    // Individually
    mdiService.add('account', 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z');
    // or in the config
  }
])
```

/tabContent
tabContent:mdi-code

```javascript
import:/assets/docs/angularjs/mdi.js
```

/tabContent
/tabs

## Frameworks

Some frameworks have specific implementations for using iconography as shown below.

### Angular Material

The [`mdi.svg`](https://materialdesignicons.com/api/download/angularmaterial/38EF63D0-4744-11E4-B3CF-842B2B6CFE1B) file contains all the icons provided on the site. Use inline with $mdIconProvider.

```javascript
app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('my/app/mdi.svg')
});
```

```html
<md-icon md-svg-icon="android"></md-icon>
<md-button aria-label="Android" class="md-icon-button">
    <md-icon md-svg-icon="android"></md-icon>
</md-button>
```
