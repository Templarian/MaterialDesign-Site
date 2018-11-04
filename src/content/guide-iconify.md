# Iconify Guide

Iconify is an open source alternative to web font.

It works similar to web font, but with few differences:
* Icons are rendered as SVG, not as glyphs.
* Iconify only downloads icons that are used on website instead of loading entire font.
* Instead of loading font you need to load small JavaScript file.

That makes Iconify easy to use with large icon sets, such as Material Design.

To use Material Design icons with Iconify add Iconify script tag to header or footer of your page:

```html
<script src="//code.iconify.design/1/1.0.0-rc1/iconify.min.js"></script>
```

See [Iconify.design](https://iconify.design) for latest script link.

## Adding icons

To add any icon to page write a placeholder HTML code:

```html
<span class="iconify" data-icon="mdi-account"></span>
```

That's all there is to it. Iconify will replace it with SVG.

## Icons list

Iconify icons set is updated within 24 hours after Material Design SVG repository is updated.

You can find list of supported icons on [Iconify MDI collection page](https://iconify.design/icon-sets/mdi/).

## Transformations and other options

If you click any icon in icons list mentioned above, Iconify will show you different code options and links to tutorials. For example, see [mdi-account icon page](https://iconify.design/icon-sets/mdi/account.html).

## Self hosted option

Iconify fetches icons from Iconify API servers. But what if you want to host everything on your own servers? You can host your own Iconify API. See [Iconify API hosting documentation](https://iconify.design/docs/api-hosting/).
