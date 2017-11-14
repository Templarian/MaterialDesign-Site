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
import:/assets/bootstrap/helper.css
```

/tabContent
/tabs

## Components <small>Example Usage</small>

import:/content/getting-started-bootstrap-alert.md

tabs:Breadcrumbs
tab:breadcrumb-example Example
tab:breadcrumb-code Code
tab:breadcrumb-notes Notes
tabContent:breadcrumb-example
<nav aria-label="breadcrumb" role="navigation">
  <ol class="breadcrumb mb-0">
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

Official Documentation for <a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" target="_blank">Breadcrumbs</a>

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


tabs:Cards
tab:card-example Example
tab:card-code Code
tab:card-notes Notes
tabContent:card-example
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title mdi mdi-home">Card title</h4>
    <h6 class="card-subtitle mdi mdi-star mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">You can use <span class="mdi mdi-emoticon-happy"></span> inline icons also.</p>
    <a href="#" class="card-link mdi mdi-checkbox-blank">Card link</a>
    <a href="#" class="card-link mdi mdi-checkbox-marked">Another link</a>
  </div>
</div>
/tabContent
tabContent:card-code

```html
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h4 class="card-title mdi mdi-home">Card title</h4>
    <h6 class="card-subtitle mdi mdi-star mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">You can use <span class="mdi mdi-emoticon-happy"></span> inline icons also.</p>
    <a href="#" class="card-link mdi mdi-checkbox-blank">Card link</a>
    <a href="#" class="card-link mdi mdi-checkbox-marked">Another link</a>
  </div>
</div>
```

/tabContent
tabContent:card-notes

Official Documentation for <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Cards</a>

/tabContent
/tabs


tabs:Dropdowns
tab:dropdown-example Example
tab:dropdown-code Code
tab:dropdown-notes Notes
tabContent:dropdown-example
<div class="dropdown">
  <button class="btn btn-secondary mdi mdi-button dropdown-toggle mdi mdi-home" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="display:block;position:relative;float: none;width: 250px;">
    <a class="dropdown-item mdi mdi-star" href="#">Action</a>
    <a class="dropdown-item mdi mdi-star" href="#">Another action</a>
    <a class="dropdown-item mdi mdi-star" href="#">Something else here</a>
  </div>
</div>
/tabContent
tabContent:dropdown-code

```html
<div class="dropdown">
  <button class="btn btn-secondary mdi mdi-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item mdi mdi-star" href="#">Action</a>
    <a class="dropdown-item mdi mdi-star" href="#">Another action</a>
    <a class="dropdown-item mdi mdi-star" href="#">Something else here</a>
  </div>
</div>
```

/tabContent
tabContent:dropdown-notes

Official Documentation for <a href="https://getbootstrap.com/docs/4.0/components/dropdown/" target="_blank">Dropdowns</a>

/tabContent
/tabs

## Expand Documentation

If you found an error or want to expand the documentation above please click the *Edit on GitHub* button at the top of the page. Not everything is covered for bevity, but always looking for feedback as this is the most accessed documentation page.