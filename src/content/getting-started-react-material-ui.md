# Material-UI - Getting Started

Material Design Icons can be used in React with [Material-UI](https://material-ui.com)'s `SvgIcon` component.

```
npm install mdi-material-ui
```

<a href="https://github.com/TeamWertarbyte/mdi-material-ui" class="btn btn-outline-secondary">icon:github-circle mdi-material-ui on GitHub</a>

## Usage

The icon names are converted to `PascalCase`, e.g. the `material-ui` icon is exported as `MaterialUi`.

```jsx
import React, { Component } from 'react'
import { MaterialUi } from 'mdi-material-ui'

class App extends Component {
  render() {
    return (
      <MaterialUi />
    )
  }
} 
```

## Props

Every icon is a `SvgIcon` and supports the same props as Material-UI's [SvgIcon](https://material-ui.com/api/svg-icon/).

## Styling

Applying a `className` attribute is usually the easiest solution. Examples are available in the [Material-UI docs](https://material-ui.com/style/icons/).
