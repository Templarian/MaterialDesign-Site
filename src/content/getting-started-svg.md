# SVG - Getting Started

Scalable Vector Graphics can be used with the `<img />` or inlined in HTML. As icon packs grow in size inlining icons can cut down on the total files size for a page rather than loading all icons in a [webfont](getting-started-webfont.md).

## Inline SVG

Inlining SVG allows one to include just the icons they need. This is done with the `<svg>` and `<path>` elements.

```xml
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