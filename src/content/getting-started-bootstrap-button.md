tabs Buttons
tab Example

<div class="btn-toolbar" role="toolbar">
    <div class="btn-group mr-2">
        <button type="button" class="btn btn-secondary mdi mdi-format-align-left" aria-label="Left Align"></button>
        <button type="button" class="btn btn-secondary mdi mdi-format-align-center" aria-label="Center Align"></button>
        <button type="button" class="btn btn-secondary mdi mdi-format-align-right" aria-label="Right Align"></button>
        <button type="button" class="btn btn-secondary mdi mdi-format-align-justify" aria-label="Justify"></button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-secondary" aria-label="Button">Btn</button>
    </div>
</div>
<div class="mt-2">
    <button class="btn btn-primary btn-sm mdi mdi-home">SM</button>
    <button class="btn btn-primary mdi mdi-home">MD</button>
    <button class="btn btn-primary btn-lg mdi mdi-home">LG</button>
</div>
<div class="mt-2">
    <button type="button" class="btn btn-primary mdi mdi-home">Primary</button>
    <button type="button" class="btn btn-secondary mdi mdi-home">Secondary</button>
    <button type="button" class="btn btn-success mdi mdi-home">Success</button>
    <button type="button" class="btn btn-danger mdi mdi-home">Danger</button>
    <button type="button" class="btn btn-warning mdi mdi-home">Warning</button>
    <button type="button" class="btn btn-info mdi mdi-home">Info</button>
    <button type="button" class="btn btn-light mdi mdi-home">Light</button>
    <button type="button" class="btn btn-dark mdi mdi-home">Dark</button>
    <button type="button" class="btn btn-link mdi mdi-home">Link</button>
</div>

/tab
tab Code

## Button Group

```html
<div class="btn-toolbar" role="toolbar">
    <div class="btn-group mr-2">
        <button type="button" class="btn btn-secondary mdi mdi-format-align-left" aria-label="Left Align"></button>
        <button type="button" class="btn btn-secondary mdi mdi-format-align-center" aria-label="Center Align"></button>
        <button type="button" class="btn btn-secondary mdi mdi-format-align-right" aria-label="Right Align"></button>
        <button type="button" class="btn btn-secondary mdi mdi-format-align-justify" aria-label="Justify"></button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-secondary" aria-label="Button">Btn</button>
    </div>
</div>
```

## Button Sizes

```html
<button class="btn btn-primary btn-sm mdi mdi-home">SM</button>
<button class="btn btn-primary mdi mdi-home">MD</button>
<button class="btn btn-primary btn-lg mdi mdi-home">LG</button>
```

## Button Colors

```html
<button type="button" class="btn btn-primary mdi mdi-home">Primary</button>
<button type="button" class="btn btn-secondary mdi mdi-home">Secondary</button>
<button type="button" class="btn btn-success mdi mdi-home">Success</button>
<button type="button" class="btn btn-danger mdi mdi-home">Danger</button>
<button type="button" class="btn btn-warning mdi mdi-home">Warning</button>
<button type="button" class="btn btn-info mdi mdi-home">Info</button>
<button type="button" class="btn btn-light mdi mdi-home">Light</button>
<button type="button" class="btn btn-dark mdi mdi-home">Dark</button>
<button type="button" class="btn btn-link mdi mdi-home">Link</button>
```

/tab
tab Notes

Official Documentation for <a href="https://getbootstrap.com/docs/4.0/components/buttons/">Buttons</a>

Make sure not to include any whitespace if there is just an icon in a button.

```html
<!-- Good -->
<button class="mdi mdi-account"></button>
<!-- Bad -->
<button class="mdi mdi-account">
</button>
```

> **Note:** The helper CSS might be helpful if you're using different size buttons.

/tab
/tabs