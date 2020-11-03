# Third Party Developer Guide

While MDI supports several [first party](/contribute/first-party-guide) libraries, utils, and components our core team leaves a lot of the integrations up to the third party community.

## Who is a Third Party Developer?

Any developer that provides an integration that relies on MDI icons. This can be components, utilities, or plugins for exisiting open source projects.

## Integrating with MDI

The top priority of building an integration is knowing where you'll get the icons. There are three ways to get the icons NPMJS, the CDN, and GitHub.

> Clearly state in the readme and documentation the [Material Design Icons](https://materialdesignicons.com) website and that the project is a third party project.

### NPMJS

NPMJS packages are built after each release node, JavaScript, and TypeScript communities.

- The [@mdi](https://www.npmjs.com/org/mdi) organization on NPMJS.
- [`@mdi/js`](https://www.npmjs.com/package/@mdi/js) - ES6/TypeScript module.
- [`@mdi/svg`](https://www.npmjs.com/package/@mdi/svg) - Individual optimized SVG files
  - `meta.json` - All icon meta data, tags, aliases, font codepoints.
  - `@mdi/font-build` - This is what builds the webfont! (`@mdi/svg` contains `font-build.json` for this reason).
- [`@mdi/util`](https://www.npmjs.com/package/@mdi/util) - [Node scripting](/guide/nodejs-scripting) utility for building your own scripts.
- [`@mdi/font`](https://www.npmjs.com/package/@mdi/font) - Webfont files.

If your project can use one of the first party libraries indirectly we recommend telling people to install them seperately. For instance `@mdi/react` can use any icon version.

```bash
npm install @mdi/js @mdi/react
```

This allows one to swap out other icon packs or upgrade/downgrade indpendently. Not all projects can do this, but we recommend it when possible.

###  CDN

As the `@mdi/svg` is also published it can be retrived from the CDN.

- CDN: `https://cdn.jsdelivr.net/npm/@mdi/svg`
  - CDN `meta.json`: `https://cdn.jsdelivr.net/npm/@mdi/svg@{{version}}/meta.json`

### GitHub

GitHub is where we store all the NPM distribution repos. Each release is tagged so it's easy to view previous changes.

- [MaterialDesign](https://github.com/Templarian/MaterialDesign) - Main Repo Synced Real-time
- [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG) - SVG Versioned
- [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS) - JS Versioned
- [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont) - Webfont Versioned

### Build Script

- [Scripting with NodeJS and MDI](http://templarian.com/2018/04/13/scripting-with-nodejs-and-material-design-icons/)

## Guidelines

Third parties should be able to do anything that helps their respective community integrate the use of the icons. With that said there are a few things we advise against.

<table>
<thead>
<tr>
<th style="width:1.5rem"></th>
<th>Don't do this...</th>
<th style="width:1.5rem"></th>
<th>Maybe Try...</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon:close:red</td>
<td>Scraping the website for data</td>
<td>icon:check:green</td>
<td>Let us know through an issue if `meta.json` is missing anything.</td>
</tr>
<tr>
<td>icon:close:red</td>
<td>Expecting us to add icons since you use the project</td>
<td>icon:check:green</td>
<td>We recommend projects to be built to support multiple icon packs and not to rely entirely on ours.</td>
</tr>
</tbody>
</table>

## Let us know what you built!

Not required, but the core team loves seeing what the community makes. Funny enough we are often the last ones that find out about all the cool integrations.

## Existing Third Party Projects

Definitely search around and checkout all the exisiting projects before starting. Your idea might already exist that you can help expand.

- [Chrome](https://chrome.google.com/webstore/detail/materialdesignicons-picke/edjaedpifkihpjkcgknfokmibkoafhme) / [Firefox](https://addons.mozilla.org/en-US/firefox/addon/materialdesignicons-picker/) Extensions.
- [VS Code Material Design Icons Intellisense](https://marketplace.visualstudio.com/items?itemName=lukas-tr.materialdesignicons-intellisense)
- [Home Assistant](https://www.home-assistant.io/docs/configuration/customizing-devices/#icon)
- mdi cli

> Submit a PR to append to this list.
