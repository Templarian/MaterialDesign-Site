# Getting Started

> **Information:** icon:information-outline Material Design Icons has been around for many years and is compatible with many technologies and frameworks. Please view the docs menu at the top for an appropriate getting started guide.

## Using the Webfont

One of the easiest ways to access all of our icons is to use the webfont. For testing or quick use you can include the CSS file from the CDN. You could also download the files via NPM to include in your project.

<a href="/getting-started/webfont" class="button">Learn More (Webfont - Getting Started)</a>

> **Danger:** Using the webfont while easy to use is highly discouraged due to performance and overall request size. Please read the [Webfont Alternatives Guide](/guide/webfont-alternatives) for more details.


## Using SVGs

All of our icons are available as an SVG.
<!-- TODO : Explain how to download them -->

### As an Image File

SVGs can be downloaded individually and included the same way as any bitmap image:

```html
<img src="/path/to/icons/example-icon.svg" alt="An example icon" style="width:24px;height:24px" />
```

### Inline SVG

SVG's can be used inline in the HTML.

```html
<svg style="width:24px;height:24px" viewbox="0 0 24 24">
  <path fill="#000000" d="M ... Z" /> <!-- account -->
</svg>
```

Inline SVGs can also be overlayed by adding additional paths.

```html
<svg style="width:24px;height:24px" viewbox="0 0 24 24">
  <path fill="#000000" d="M ... Z" /> <!-- account -->
  <path fill="#990000" d="M ... Z" /> <!-- block-helper -->
</svg>
```
