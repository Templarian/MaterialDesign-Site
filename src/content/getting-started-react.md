# React - Getting Started

Material Design Icons can be used in React with a custom component or with the one provided in this module.

```
npm install @mdi/react @mdi/js
```

<a href="https://templarian.github.io/@mdi/react/" class="btn btn-outline-primary">icon:teach Demo</a>
<a href="https://github.com/Templarian/MaterialDesign-React" class="btn btn-outline-secondary ml-2">icon:github MaterialDesign-React on GitHub</a>
<a href="https://marketplace.visualstudio.com/items?itemName=lukas-tr.materialdesignicons-intellisense" class="btn btn-outline-secondary ml-2">icon:microsoft-visual-studio-code VS Code Extension</a>

## Usage

```jsx
import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

class App extends Component {
  render() {
    return (
      <Icon path={mdiAccount}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin/>
    )
  }
} 
```

<a href="https://codesandbox.io/s/staging-paper-5w879" class="btn btn-outline-secondary">View Example App on CodeSandbox</a>

## Props

| Prop        | PropTypes      | Default        | Details |
|-------------|----------------|----------------|---------|
| path        | string         | required       | SVG path data. Usually from @mdi/js |
| title       | string, null   | `null`         | A11y `<title>{title}</title>` |
| description | string, null   | `null`         | A11y `<desc>{desc}</desc>` |
| size        | number, string | null           | `{size * 1.5}rem`, `'1em'`, `'24px'` |
| horizontal  | bool           | `false`        | Flip Horizontal |
| vertical    | bool           | `false`        | Flip Vertical |
| rotate      | number         | `0`            | degrees `0` to `360` |
| color       | string         | `currentColor` | [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value), such as `rgb()`, `rgba()`, `#000` etc |
| spin        | bool, number   | `false`        | `true = 2s`, `{spin}s` |

<blockquote class="alert alert-info">
  icon:information-outline Learn more about other features including the `Stack` component in the <a href="https://github.com/Templarian/MaterialDesign-React">Repo</a>.
</blockquote>

## Styling

Applying a `className` attribute is usually the easiest solution. The example below demonstrates using SCSS to style the icons.

In most cases it may be a good idea to set a base size. Assuming a `16px` base `font-size` in most themes applying `1.5rem` will make the icon a `24px`.

```scss
svg {
  width: 1.5rem;
}
```

For more specific styling apply classes. To make selection of layers easier use the `nth-child` selector.

```scss
// For <Icon className="custom-class" />
svg.custom-class {
  path {
    fill: blue;
  }
}
// For <Stack className="custom-class">
svg.custom-class {
  // First layer (behind)
  path:nth-child(1) {
    fill: blue;
  }
  // Second layer (infront)
  path:nth-child(2) {
    fill: red;
  }
}
```

## Accessibility

Making icons accessible can be done through the `title` prop. If for some rare reason more information is required a `description` field can also be used.

By leaving off the `title` prop an icon is assumed to be presentation only. These will be ignored by screen readers. This is ideal for icon buttons or areas where text next to the icon suffices.

```js
<p><Icon path={mdiAccount} /> User Profile</p>
<p><Icon path={mdiAccount} title="User Profile" /></p>
<button aria-label="User Profile"><Icon path={mdiAccount} /></button>
```
