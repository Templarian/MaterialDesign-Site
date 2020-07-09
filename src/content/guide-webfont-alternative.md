# Webfont Alternatives - Guide

This guide will outline some alterntives of the Webfont and why other solutions might be more ideal.

## What is the webfont

The webfont is several font files that your browser can pick from. All modern browsers will pick the `woff2` font file to download. This font as of `v5.3.45` is **291 KB** and the CSS is **49.4 KB** compressed and growing with each release.

- Large Size (larger than any modern web framework)
- Use only 10 Icons and it includes all.

<blockquote class="alert alert-info">
  In a scenerio where the frontend does not know all required icons it may be ideal to use the webfont.
</blockquote>

## Iconify

Instead of using web font, you can use Iconify SVG framework. It is as easy to use as the web font, but it only loads icons that are used on page and renders them as pixel perfect SVG rather than text. Read [Iconify Guide](/guide/iconify) guide on how to use MDI with Iconify.

## React Developer

For those using the React framework there is a first party provided component `@mdi/react`.

<a href="/getting-started/react" class="button">icon:react View the React Guide</a>

## Angular

<a href="/getting-started/angular" class="button">icon:angular View the Angular Guide</a>

## VueJS

<a href="/getting-started/vuejs" class="button">icon:vuejs View the VueJS Guide</a>

## Other

The `@mdi/js` library contains all the icon path data. By using this library in your JavaScript you ensure you're only including the icons that are needed.

```js
import { mdiAccount } from '@mdi/js';

// mdiAccount = 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'

document.querySelector('svg path').setAttribute('d', mdiAccount);
```

```html
<svg viewBox="0 0 24 24">
  <path d="" />
</svg>
```
