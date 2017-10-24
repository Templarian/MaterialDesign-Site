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

<!-- ## Using iron-iconset-svg

```
bower install --save mdi-iconset-svg
bower install --save PolymerElements/iron-icon
```

```html
<link rel="import" href="../bower_components/iron-icon/iron-icon.html">
<link rel="import" href="../bower_components/mdi-iconset-svg/mdi-logo-iconset-svg.html">

<iron-icon icon="mdi-logo:polymer"></iron-icon>
``` -->