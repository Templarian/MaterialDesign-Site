# Bootstrap - Getting Started

Bootstrap content here.

<p data-height="265" data-theme-id="0" data-slug-hash="bdgoVQ" data-default-tab="html,result" data-user="templarian" data-embed-version="2" data-pen-title="Material Design Icons - Bootstrap" class="codepen">See the Pen <a href="https://codepen.io/templarian/pen/bdgoVQ/">Material Design Icons - Bootstrap</a> by Austin Andrews (<a href="https://codepen.io/templarian">@templarian</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<div class="row">
            <div class="col-md-8">
                <h2>CDN <small>Sponsored by <a href="https://www.maxcdn.com/open-source/">MaxCDN</a></small></h2>
                <p>A content delivery network provides a fast way to deliver the webfont.</p>
                <pre><code>//cdn.materialdesignicons.com/{{version}}/css/materialdesignicons.min.css</code></pre>
            </div>
            <div class="col-md-4">
                <h2>Bower or NPM</h2>
                <p>For <a href="http://bower.io/">Bower</a> or <a href="https://npmjs.com">NPM</a> use:</p>
                <pre><code>bower install mdi
npm install mdi</code></pre>
            </div>
        </div>
        <h2>CSS <small>Additional Boostrap Specific CSS</small></h2>
        <p>The below snippet of CSS must be included into your project. Future release may bundle these additional styles.</p>
        <pre><code style="max-height: 110px;">i.mdi::before,
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
}</code></pre>
        <h2>Components <small>Example Usage</small></h2>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Button Groups</div>
                <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default" aria-label="Left Align">
                            <i class="mdi mdi-format-align-left" aria-hidden="true"></i>
                        </button>
                        <button type="button" class="btn btn-default" aria-label="Center Align"><i class="mdi mdi-format-align-center" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" aria-label="Right Align"><i class="mdi mdi-format-align-right" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" aria-label="Justify">
                            <i class="mdi mdi-format-align-justify" aria-hidden="true"></i>
                        </button>
                    </div>
                    <button type="button" class="btn btn-default" aria-label="Button">Btn</button>
                </div>
            </div>
            <div class="col-md-7">
                <pre>&lt;div class="btn-toolbar" role="toolbar"&gt;
   &lt;div class="btn-group"&gt;
        &lt;button type="button"
                class="btn btn-default"
                aria-label="Left Align"&gt;
            &lt;i class="mdi mdi-format-align-left"
               aria-hidden="true"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;!-- OR --&gt;
        &lt;button type="button"
                class="btn btn-default mdi mdi-format-align-center"
                aria-label="Center Align"&gt;&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Button Sizes</div>
                <div class="m-b-10">
                    <button type="button" class="btn btn-xs btn-default" aria-label="Profile">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-xs btn-default" aria-label="Profile btn-xs">
                        <i class="mdi mdi-flask" aria-hidden="true"></i>
                        btn-xs
                    </button>
                </div>
                <div class="m-b-10">
                    <button type="button" class="btn btn-sm btn-default" aria-label="Profile">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-default" aria-label="Profile btn-sm">
                        <i class="mdi mdi-flask" aria-hidden="true"></i>
                        btn-sm
                    </button>
                </div>
                <div class="m-b-10">
                    <button type="button" class="btn btn-default" aria-label="Profile">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-default" aria-label="Profile btn normal">
                        <i class="mdi mdi-flask" aria-hidden="true"></i>
                        btn
                    </button>
                </div>
                <div class="m-b-10">
                    <button type="button" class="btn btn-lg btn-default" aria-label="Profile">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-lg btn-default" aria-label="Profile btn-lg">
                        <i class="mdi mdi-flask" aria-hidden="true"></i>
                        btn-lg
                    </button>
                </div>
            </div>
            <div class="col-md-7">
                <pre>&lt;button type="button" class="btn btn-default" aria-label="Profile"&gt;
    &lt;i class="mdi mdi-account" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;button type="button" class="btn btn-default" aria-label="Flask"&gt;
    &lt;i class="mdi mdi-flask" aria-hidden="true"&gt;&lt;/i&gt;
    btn
&lt;/button&gt;
&lt;!-- OR --&gt;
&lt;button type="button" class="btn btn-default mdi mdi-flask" aria-label="Flask"&gt;
    btn
&lt;/button&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 example">
                <div class="title">Button Group</div>
                <div class="btn-group">
                    <button type="button" class="btn btn-default">
                        <i class="mdi mdi-account"></i>
                        Default
                    </button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <span class="caret"></span>
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li>
                            <a href="#">
                                <i class="mdi mdi-sword"></i>
                                Action
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="mdi mdi-security"></i>
                                Another action
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="mdi mdi-pencil"></i>
                                Something else here
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="example">
            <div class="title">Button Colors</div>
            <button type="button" class="btn btn-default">
                <i class="mdi mdi-account"></i>
                Default
            </button>
            <button type="button" class="btn btn-primary">
                <i class="mdi mdi-account"></i>
                Primary
            </button>
            <button type="button" class="btn btn-success">
                <i class="mdi mdi-account"></i>
                Success
            </button>
            <button type="button" class="btn btn-info">
                <i class="mdi mdi-account"></i>
                Info
            </button>
            <button type="button" class="btn btn-warning">
                <i class="mdi mdi-account"></i>
                Warning
            </button>
            <button type="button" class="btn btn-danger">
                <i class="mdi mdi-account"></i>
                Danger
            </button>
            <button type="button" class="btn btn-link">
                <i class="mdi mdi-link"></i>
                Link
            </button>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Tabs</div>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active">
                        <a href="#">
                            <i class="mdi mdi-home-modern"></i>
                            Home
                            <span class="sr-only"> (current)</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#">
                            <i class="mdi mdi-account"></i>
                            Help
                        </a>
                    </li>
                    <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            <i class="mdi mdi-account"></i>
                            Dropdown
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="#">
                                    <i class="mdi mdi-sword"></i>
                                    Action
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="mdi mdi-security"></i>
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="mdi mdi-pencil"></i>
                                    Something else here
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="col-md-7">
                <pre>&lt;ul class="nav nav-tabs"&gt;
    &lt;li role="presentation" class="active"&gt;
        &lt;a href="#"&gt;
            &lt;i class="mdi mdi-home-modern" aria-hidden="true"&gt;&lt;/i&gt;
            Home
            &lt;span class="sr-only"&gt; (current)&lt;/span&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    ...
&lt;/ul&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Breadcrumbs</div>
                <ol class="breadcrumb">
                    <li>
                        <a href="#">
                            <i class="mdi mdi-home-modern" aria-hidden="true"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="mdi mdi-library" aria-hidden="true"></i>
                            <span>Library</span>
                        </a>
                    </li>
                    <li class="active">
                        <i class="mdi mdi-database" aria-hidden="true"></i>
                        <span>Data</span>
                    </li>
                </ol>
            </div>
            <div class="col-md-7">
                <pre>&lt;ol class="breadcrumb"&gt;
    &lt;li&gt;
        &lt;a href="#"&gt;
            &lt;i class="mdi mdi-home-modern" aria-hidden="true"&lt;/i&gt;
            &lt;span&gt;Home&lt;/span&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    ...
&lt;/ol&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Alert</div>
                <div class="alert alert-danger" role="alert">
                    <span class="mdi mdi-alert-circle" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    Enter a valid email address
                </div>
            </div>
            <div class="col-md-7">
                <pre>&lt;div class="alert alert-danger" role="alert"&gt;
    &lt;span class="mdi mdi-alert-circle" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;span class="sr-only"&gt;Error:&lt;/span&gt;
    Enter a valid email address
&lt;/div&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Input Group</div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" aria-label="Search">
                            <i class="mdi mdi-magnify" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="col-md-7">
                <pre>&lt;div class="input-group"&gt;
    &lt;input type="text" class="form-control" placeholder="Search..."&gt;
    &lt;span class="input-group-btn"&gt;
        &lt;button class="btn btn-default" type="button" aria-label="Search"&gt;
            &lt;i class="mdi mdi-magnify" aria-hidden="true"&gt;&lt;/i&gt;
        &lt;/button&gt;
    &lt;/span&gt;
&lt;/div&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Input Group Addon</div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="mdi mdi-tag" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" aria-label="Tag">
                </div>
            </div>
            <div class="col-md-7">
                <pre>&lt;div class="input-group"&gt;
    &lt;span class="input-group-addon"&gt;
        &lt;i class="mdi mdi-tag" aria-hidden="true"&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;input type="text" class="form-control" aria-label="Tag"&gt;
&lt;/div&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">Nav</div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9">
                                <span class="sr-only">Toggle navigation</span>
                                <i class="mdi mdi-menu"></i>
                            </button>
                            <a class="navbar-brand" href="#">
                                <i class="mdi mdi-package" aria-hidden="true"></i>
                                Brand
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="#">Home<span class="sr-only"> (current page)</span></a></li>
                                <li><a href="#">Link</a></li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-account" aria-hidden="true"></i>
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-md-7">
                <pre>&lt;nav class="navbar navbar-inverse"&gt;
    &lt;div class="container-fluid"&gt;
        &lt;div class="navbar-header"&gt;
            &lt;button type="button" class="navbar-toggle collapsed"  
                    data-toggle="collapse" data-target="#ex-navbar"&gt;
              &lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;
              &lt;i class="mdi mdi-menu" aria-hidden="true"&gt;&lt;/i&gt;
          &lt;/button&gt;
          &lt;a class="navbar-brand" href="#"&gt;
              &lt;i class="mdi mdi-package" aria-hidden="true"&gt;&lt;/i&gt;
              Brand
            &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="collapse navbar-collapse" id="ex-navbar"&gt;
            &lt;ul class="nav navbar-nav"&gt;
                &lt;li class="active"&gt;&lt;a href="#"&gt;Home&lt;span class="sr-only"&gt; (current page)&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
                ...
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;</pre>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 example">
                <div class="title">List</div>
                <ul class="list-group">
                    <li class="list-group-item active">
                        <span class="badge">42</span>
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                        Cras justo odio
                    </li>
                    <li class="list-group-item">
                        <span class="badge">14</span>
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                        Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item">
                        <i class="mdi mdi-account" aria-hidden="true"></i>
                        Morbi leo risus
                    </li>
                </ul>
            </div>
            <div class="col-md-7">
                <pre>&lt;ul class="list-group"&gt;
    &lt;li class="list-group-item active"&gt;
        &lt;span class="badge"&gt;42&lt;/span&gt;
        &lt;i class="mdi mdi-account" aria-hidden="true"&gt;&lt;/i&gt;
        Cras justo odio
    &lt;/li&gt;
    ...
&lt;/ul&gt;</pre>
            </div>
        </div>
