# Webfont - Getting Started

The webfont is a quick way to integrate the icons into your application.

## Setup

```
npm install mdi
bower install mdi
```

```
https://cdn.materialdesignicons.com/{{version}}/css/materialdesignicons.css
```

## Basic Example

Each icon can be referenced by their name prefixed with `mdi-`. For instance to get the home icon `mdi-home`.

```html
Bob lives in a <span class="mdi mdi-home"></span>.
```

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
