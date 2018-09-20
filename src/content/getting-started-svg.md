# SVG - Getting Started

Scalable Vector Graphics can be used with the `<img />` or inlined in HTML. SVG is the preferred way consuming the icons for the web.

For users of NPM we provide all the icons as SVG files in the `@mdi/svg` package.

```
npm install @mdi/svg
```

## Image Tag

The `<img />` HTML element can display SVG files similar to how `PNG`,`JPG`, or `GIF`'s are loaded.

```html
<img src="path/to/account-circle.svg"/>
```

## Inline SVG

Inlining SVG allows one to include just the icons they need. This is done with the `<svg>` and `<path>` elements.

```html
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="..." />
</svg>
```

### Styling SVG with CSS

```css
svg {
    width: 24px;
    height: 24px;
}
svg path {
    fill: red;
}
```

### Styling with