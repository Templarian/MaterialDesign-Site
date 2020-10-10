Consider using the [webcomponent version](https://github.com/JamesCoyle/svg-icon) of this component for an icon component that can be used in any modern browser with any framework.

# Vue Icon Component

[![](https://chips.james-coyle.now.sh/npm/version/@jamescoyle/vue-icon)](https://www.npmjs.com/package/@jamescoyle/vue-icon)
[![](https://chips.james-coyle.now.sh/npm/downloads/@jamescoyle/vue-icon)](https://www.npmjs.com/package/@jamescoyle/vue-icon)

MDI can be used in conjunction with the [Vue Icon Component](https://www.npmjs.com/package/@jamescoyle/vue-icon). See the [README in the repo](https://www.npmjs.com/package/@jamescoyle/vue-icon) for more usage information. 

# Basic Usage

1. Install from NPM
   ```
   npm install @mdi/js @jamescoyle/vue-icon
   ```

2. Import into your project
   ``` 
   import SvgIcon from '@jamescoyle/vue-icon'
   import { mdiAccount } from '@mdi/js'
   ```

## SFC Example
The following example shows how you might use an icon within a single file component.

```
<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

export default {
	name: "my-cool-component",

	components: {
		SvgIcon
	},

	data() {
		return {
	  		path: mdiAccount,
		}
	}
}
</script>
```
