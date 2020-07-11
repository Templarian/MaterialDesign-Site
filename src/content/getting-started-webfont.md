> **Warning:** icon:information-outline Due to size, the <b>webfont may harm app/web performance.</b> Please read the <a href="/guide/webfont-alternatives"><u>Webfont Alternatives Guide</u></a> to determine if it is right for your project.

# Webfont - Getting Started

The webfont is a quick way to integrate the icons into your application.

<a class="button" href="/changelog">icon:text-box-outline View the Changelog</a> <a class="button" href="/changelog">icon:format-list-checks View the Upgrade Guide</a>

## Setup

```bash
npm install @mdi/font
```

```text
https://cdn.materialdesignicons.com/{{version}}/css/materialdesignicons.min.css
```

## Basic Example

Each icon can be referenced by their name prefixed with `mdi-`. For instance to get the home icon `mdi-home`.

```html
Bob lives in a <span class="mdi mdi-home"></span>.
```

<a href="https://marketplace.visualstudio.com/items?itemName=lukas-tr.materialdesignicons-intellisense" class="button">icon:microsoft-visual-studio-code VS Code Material Design Icons Extension</a>

## Helper Classes

Material Design Icons (MDI) contains many helper classes to quickly modify the look of the icons.

### Rotate

- `mdi-rotate-45` - Rotates 45 Degrees.
- `mdi-rotate-90` - Rotates 90 Degrees.
- `mdi-rotate-135` - Rotates 135 Degrees.
- `mdi-rotate-180` - Rotates 180 Degrees.
- `mdi-rotate-225` - Rotates 225 Degrees.
- `mdi-rotate-270` - Rotates 270 Degrees.
- `mdi-rotate-315` - Rotates 315 Degrees.

```html
<span class="mdi mdi-account mdi-rotate-45"></span>
```

### Flip

- `mdi-flip-h` - Flip horizontal.
- `mdi-flip-v` - Flip vertical.

```html
<span class="mdi mdi-account mdi-flip-h"></span>
```
> **Note:** `mdi-flip-*` and `mdi-rotate-*` classes cannot be used on the same element at the same time.

### Spin (v1.9.32+)

- `mdi-spin` - Spinning icon.

```html
<span class="mdi mdi-loading mdi-spin">Processing</span>
```

### Sets of Icons (v1.6.80+)

```html
<div class="mdi-set">
    <span class="mdi-star"></span>
    <span class="mdi-star"></span>
    <span class="mdi-star"></span>
    <span class="mdi-star-outline"></span>
    <span class="mdi-star-outline"></span>
</div>
```

## Accessibility

There are a few `aria-` attributes that can be added to the icon's tag or the parent's element to make things easier for screen readers.

### Decoration Icons

Many times an icon has text next to it that explains the things. The icon is just for decoration so the screen reader can ignore it.

```html
<span class="mdi mdi-bookmark" aria-hidden> Bookmark Item
```

... Type More Here ...

## File Descriptions

- `fonts/`
  - `materialdesignicons-webfont.eot`
  - `materialdesignicons-webfont.ttf`
  - `materialdesignicons-webfont.woff`
  - `materialdesignicons-webfont.woff2`
- `css/`
  - `materialdesignicons.min.css` - Minified CSS
  - `materialdesignicons.min.css.map` - Developer Tools Map
- `sass`
  - `_animated.scss` - Animations
  - `_core.scss` - The base `.mdi` class
  - `_extras.scss` - Rotate / Flip / Colors
  - `_functions.scss` - Helpers
  - `_icons.scss` - Icon data
  - `_path.scss` - Webfont paths
  - `_variables` - All available variables
  - `materialdesignicons.sass` - Main
- `preview.html` - Preview all icons

The above files are also on the CDN: [View Latest](https://cdn.materialdesignicons.com/{{version}}).

> Note: `preview.html` is renamed to `index.html` on the CDN.

## Build Webfont

The webfont can be built with the contents of the `@mdi/svg` and `@mdi/font-build`.

```bash
# Extract https://github.com/Templarian/MaterialDesign-SVG/archive/master.zip
# Inside of the folder run
npx @mdi/font-build
# The /dist folder contains the generated files
```

Learn more: [@mdi/font-build](http://npmjs.com/package/@mdi/font-build)

> Note: Using the `--fontSvg` flag will generate the `.svg` font. This was removed in 4.0+ as no modern browser uses it.
