<h1>Getting Started With MDI</h1>
<p>MDI is available as either a
	<a href="#webfont">webfont</a>
	or in an
	<a href="#svg">SVG</a>
	format. We also provide support for a variety of
	<a href="#frameworks">frameworks</a>.</p>

<section>
	<a name="webfont"></a>
	<h1>Using the Webfont</h1>
	<p>One of the easiest ways to access all of our icons is to use the webfont. For testing or quick use you can import the CSS file from the CDN. You can also download the files via NPM to include in your project.</p>
	<div class="row">
		<div class="col-md-8">
			<h2>CDN
				<small>Sponsored by
					<a href="https://www.maxcdn.com/open-source/">MaxCDN</a>
				</small>
			</h2>
			<p>A content delivery network provides a fast way to deliver the webfont.</p>
			<pre><code>//cdn.materialdesignicons.com/{{version}}/css/materialdesignicons.min.css</code></pre>
		</div>
		<div class="col-md-4">
			<h2>Bower or NPM</h2>
			<p>For
				<a href="https://npmjs.com">NPM</a>
				use:</p>
			<pre><code>npm install mdi</code></pre>
		</div>
	</div>
	<a href="#" class="button">Learn More</a>
</section>

<section>
	<a name="svg"></a>
	<h1>Using SVGs</h1>
	<p>All of our icons are available as an SVG.</p>
	<!-- TODO : Explain how to download them -->
	<h2>As an Image File</h2>
	<p>SVGs can be downloaded individually and included the same way as any bitmap image:</p>
	<pre><code>&lt;img src="/path/to/icons/example-icon.svg" alt="An example icon" style="width:24px;height:24px" /&gt;</code></pre>
	<h2>Inline SVG</h2>
	<p>SVG's can be used inline in the HTML.</p>
	<pre><code>&lt;svg style="width:24px;height:24px" viewbox="0 0 24 24"&gt;
  &lt;path fill="#000000" d="M ... Z" /&gt; <!-- account -->
&lt;/svg&gt;</code></pre>
	<p>Inline SVGs can also be overlayed by adding additional paths.</p>
	<pre><code>&lt;svg style="width:24px;height:24px" viewbox="0 0 24 24"&gt;
  &lt;path fill="#000000" d="M ... Z" /&gt; <!-- account -->
  &lt;path fill="#990000" d="M ... Z" /&gt; <!-- block-helper -->
&lt;/svg&gt;</code></pre>
</section>

<section>
	<a name="frameworks"></a>
	<h1>Supported Frameworks</h1>
	<div class="row">
		<!-- TODO : Add cards to link to framework documentation -->
	</div>
</section>
