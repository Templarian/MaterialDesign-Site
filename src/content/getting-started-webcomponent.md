# Web Component

[![](https://chips.james-coyle.now.sh/npm/version/@jamescoyle/svg-icon)](https://www.npmjs.com/package/@jamescoyle/svg-icon)
[![](https://chips.james-coyle.now.sh/npm/downloads/@jamescoyle/svg-icon)](https://www.npmjs.com/package/@jamescoyle/svg-icon)

MDI can be used in conjunction with the [SvgIcon Webcomponent](https://www.npmjs.com/package/@jamescoyle/svg-icon). See the [README in the repo](https://www.npmjs.com/package/@jamescoyle/svg-icon) for more usage information. 

### Basic Usage

1. Install from NPM

```bash
npm install @mdi/js @jamescoyle/svg-icon
```

2. Import into your project

Note: The following requires a build tool such as Webpack or Rollup. You could also copy the file into your project and import it directly for a simpler setup. 

```jsx
<!doctype html>
<html>
  <head>
    <script type="module">
      import '@jamescoyle/svg-icon'
    </script>
  </head>
  <body>
    <svg-icon type="mdi" path="M...z"></svg-icon>
  </body>
</html>
```
