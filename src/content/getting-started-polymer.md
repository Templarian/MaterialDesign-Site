# Polymer - Getting Started

Install and import the `iron-icon` web component to start using `mdi-svg`

## Using SVGs

```
bower install --save mdi-svg
bower install --save PolymerElements/iron-icon
```

```html
<link rel="import" href="../bower_components/iron-icon/iron-icon.html">

<style is="custom-style">
  .big {
    --iron-icon-height: 32px;
    --iron-icon-width: 32px;
  }
</style>

<iron-icon class="big" src="/path/to/icons/example-icon.svg"></iron-icon>
```

## Using iron-iconset-svg

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/kriss-kross-io/mdi-iconset-svg)

```
bower install --save kriss-kross-io/mdi-iconset-svg
bower install --save PolymerElements/iron-icon
```

```html
<link rel="import" href="../bower_components/iron-icon/iron-icon.html">
<link rel="import" href="../bower_components/mdi-iconset-svg/mdi-logo-iconset-svg.html">

<iron-icon icon="mdi-logo:polymer"></iron-icon>
```

The iconset has duplicate icons, and it's not recommended to import all the icons.
Alternative you can create your own iconset with only the required icons. This version of the [Polymer Iconset Generator](https://mdi-poly-icon.appspot.com/) includes all icons from `mdi-iconset-svg`.

1. Visit [https://mdi-poly-icon.appspot.com/](https://mdi-poly-icon.appspot.com/)
2. Select the icons you want to use in your app
3. Download the optimized <iron-iconset-svg> markup and create an HTML import for it
4. Load the import in your app and start using!
