# Getting Started

MDI is available as either a <a href="#webfont">webfont</a> or in an <a href="#svg">SVG</a> format. We also provide support for a variety of <a href="#frameworks">frameworks</a>.

## Using the Webfont

One of the easiest ways to access all of our icons is to use the webfont. For testing or quick use you can import the CSS file from the CDN. You can also download the files via NPM to include in your project.

<div class="row">
	<div class="col-md-8">
		<h3>CDN
			<small>Sponsored by
				<a href="https://www.maxcdn.com/open-source/">MaxCDN</a>
			</small>
		</h3>
		<p>A content delivery network provides a fast way to deliver the webfont.</p>
		<pre><code>//cdn.materialdesignicons.com/{{version}}/css/materialdesignicons.min.css</code></pre>
	</div>
	<div class="col-md-4">
		<h3>NPM or Yarn</h3>
		<p>For <a href="https://npmjs.com">NPM</a> use:</p>
		<pre><code>npm install @mdi/font</code></pre>
	</div>
</div>
<a href="#" class="btn btn-primary">Learn More</a>


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
