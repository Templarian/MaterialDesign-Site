# Scripting with NodeJS Guide

> **Goal:** Write a NodeJS script that takes the `@mdi/svg` [package](https://github.com/Templarian/MaterialDesign-SVG) and converts it into a easy to view `preview.html`.

I picked this since it accesses the `meta.json` (this contains all the meta information about each icon, like tags, aliases, etc.) and in the end generates a single `html` file.

## Prerequisites

- Empty Folder named "preview"
- [NodeJS](https://nodejs.org/en/download/) Installed (for `npm` command line)
- [Visual Studio Code](https://code.visualstudio.com/) (or another editor, but my examples will use this)

The NodeJS command line will allow us to pull down some helper scripts and execute our `build.js` we'll be writing.

## NPM Init

The first step will require you to open a command line of your choice (`CTRL+tilde` in VS Code).

- Run `npm init` in your `/preview` folder
- Press enter a few times to accept all the defaults.
- Run `npm install @mdi/svg @mdi/util`

Awesome, you will now see a folder called `node_modules` this contains a copy of the latest version of the SVG's and the `meta.json` file.

> **Note:** If you want to see the `meta.json` open it and then run `CTRL+P` followed by typing `format`. This will format the JSON file.

## Creating the Build Script

The `build.js` file is below. We'll break down what each part does and what the `@mdi/util` provides.

```javascript
const util = require('@mdi/util');

const fileName = "./preview.html";
const version = util.getVersion();
const meta = util.getMeta(true); // withPaths

const body = meta.map(icon => `
  <span onClick="a('${icon.name}')"
        title="${icon.name}">
    <svg viewBox="0 0 24 24">
      <path d="${icon.path}" />
    </svg>
  </span>
`).join('');

const template = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Material Design Icons - Preview</title>
    <style>
      svg { width: 24px; height: 24px }
    </style>
    <script>
      window.a = x => alert(x);
    </script>
  </head>
  <body>
    <h1>MDI Preview</h1>
    ${body}
  </body>
  </html>
`;

util.write(fileName, template);
console.log(`\u2714 Build ${version}`);
```

The `@mdi/util` includes a few helper methods for working with the `@mdi/svg` package's data with NodeJS.

- **`util.getVersion()`** Get the semver formatted string `major.minor.build` of the current `@mdi/svg` release.
- **`util.getMeta(true)`** Get the `meta.json` data. Passing true will parse the SVG folder for path data assigning it to `.path`.
- **`util.write(file, data)`** Write data to a file.
- **`util.read(file)`** Read data from a file.

View the [util.js](https://github.com/Templarian/MaterialDesign-Util/blob/master/util.js) to understand these utilities.

## Update `package.json`

In the `package.json` a new script needs to be added to handle `build`.

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "node build.js"
},
```

To run the build execute `npm run build`.

![MDI Preview](/content/images/2018/04/mdi-preview-nodejs.png)

## Wrapup

Hopefully you found the above tutorial useful and allows you to create more complex build scripts.