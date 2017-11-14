# AngularJS - Getting Started

In AngularJS you will want to use a method that cleanly inserts SVG inline.

## SVG

Learn more about [SVG](./svg).

## Standalone Directive

If you need a standalone directive we suggest using the one below.

```javascript
import:/assets/docs/angularjs/mdi.js
```

## Frameworks

Some frameworks have specific implementations for using iconography as shown below.

### Angular Material

The `mdi.svg` file contains all the icons provided on the site. Use inline with $mdIconProvider.

```js
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
