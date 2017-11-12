# Bootstrap - Getting Started

tabs:Introduction
tab:intro-content Introduction
tab:intro-install Install
tab:intro-css Helper CSS
tabContent:intro-content

<p>Bootstrap is an Open Source CSS framework containing many of the most used components. This site also uses Bootstrap extensively.</p>

<p class="mb-0"><small>This page is for Bootstrap v4, please view Bootstrap v3 for legacy support.</small></p>

/tabContent
tabContent:intro-install
<div class="row">
  <div class="col-md-8">
    <p>A content delivery network provides a fast way to deliver the webfont.</p>
    <pre><code>//cdn.materialdesignicons.com/{{version}}/css/materialdesignicons.min.css</code></pre>
  </div>
  <div class="col-md-4">
    <p>For <a href="http://bower.io/">Bower</a> or <a href="https://npmjs.com">NPM</a> use:</p>
    <pre><code>bower install mdi
npm install mdi</code></pre>
  </div>
</div>
<blockquote>The CDN is sponsored by <a href="https://www.maxcdn.com/open-source/">MaxCDN</a>. This project could not exist without their support.</blockquote>
/tabContent
tabContent:intro-css

The below snippet of CSS must be included into your project. Future release may bundle these additional styles.

```css
i.mdi::before,
span.mdi::before,
button.mdi::before {
    font-size: 24px;
    line-height: 13px;
}
.btn.mdi::before,
.btn .mdi::before {
    position: relative;
    top: 4px;
}
.btn-xs.mdi::before,
.btn-xs .mdi::before {
    font-size: 18px;
    top: 3px;
}
.btn-sm.mdi::before,
.btn-sm .mdi::before {
    font-size: 18px;
    top: 3px;
}
.dropdown-menu .mdi {
    width: 18px;
}
.dropdown-menu .mdi::before {
    position: relative;
    top: 4px;
    left: -8px;
}
.nav .mdi::before {
    position: relative;
    top: 4px;
}
.navbar .navbar-toggle .mdi::before {
    position: relative;
    top: 4px;
    color: #FFF;
}
.breadcrumb .mdi::before {
    position: relative;
    top: 4px;
}
.breadcrumb a:hover {
    text-decoration: none;
}
.breadcrumb a:hover span {
    text-decoration: underline;
}
.alert .mdi::before {
    position: relative;
    top: 4px;
    margin-right: 2px;
}
.input-group-addon .mdi::before {
    position: relative;
    top: 3px;
}
.navbar-brand .mdi::before {
    position: relative;
    top: 2px;
    margin-right: 2px;
}
.list-group-item .mdi::before {
    position: relative;
    top: 3px;
    left: -3px
}
```

/tabContent
/tabs

## Components <small>Example Usage</small>

tabs:Alerts
tab:alert-example Example
tab:alert-code Code
tab:alert-notes Notes
tabContent:alert-example
<div class="alert alert-primary mdi mdi-alert" role="alert">
    This is a primary alert—check it out!
</div>
<div class="alert alert-danger mdi mdi-skull mb-0" role="alert">
    This is a danger alert—careful!
</div>
/tabContent
tabContent:alert-code

```html
<div class="alert alert-primary mdi mdi-alert" role="alert">
    This is a primary alert—check it out!
</div>
```

/tabContent
tabContent:alert-notes

Official Documentation for <a href="https://getbootstrap.com/docs/4.0/components/alerts/" target="_blank">Alerts</a>

/tabContent
/tabs


tabs:Breadcrumbs
tab:breadcrumb-example Example
tab:breadcrumb-code Code
tab:breadcrumb-notes Notes
tabContent:breadcrumb-example
<nav aria-label="breadcrumb mb-0" role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" class="mdi mdi-home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" class="mdi mdi-book">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span class="mdi mdi-book-multiple">Data</span></li>
  </ol>
</nav>
/tabContent
tabContent:breadcrumb-code

```html
<nav aria-label="breadcrumb" role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" class="mdi mdi-home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" class="mdi mdi-book">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span class="mdi mdi-book-multiple">Data</span></li>
  </ol>
</nav>
```

/tabContent
tabContent:breadcrumb-notes

No notes.

/tabContent
/tabs


tabs:Buttons
tab:button-example Example
tab:button-code Code
tab:button-notes Notes
tabContent:button-example
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
/tabContent
tabContent:button-code

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

/tabContent
tabContent:button-notes

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

/tabContent
/tabs

## Expand Documentation

If you found an error or want to expand the documentation above please click the *Edit on GitHub* button at the top of the page. Not everything is covered for bevity, but always looking for feedback as this is the most accessed documentation page.