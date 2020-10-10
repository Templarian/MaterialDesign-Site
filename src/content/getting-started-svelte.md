Consider using the [webcomponent version](https://github.com/JamesCoyle/svg-icon) of this component for an icon component that can be used in any modern browser with any framework.

# Svelte Icon Component

[![](https://chips.james-coyle.now.sh/npm/version/@jamescoyle/svelte-icon)](https://www.npmjs.com/package/@jamescoyle/svelte-icon)
[![](https://chips.james-coyle.now.sh/npm/downloads/@jamescoyle/svelte-icon)](https://www.npmjs.com/package/@jamescoyle/svelte-icon)

MDI can be used in conjunction with the [Svelte Icon Component](https://www.npmjs.com/package/@jamescoyle/svelte-icon). See the [README in the repo](https://www.npmjs.com/package/@jamescoyle/svelte-icon) for more usage information. 

# Basic Usage

1. Install from NPM
   ```
   npm install @mdi/js @jamescoyle/svelte-icon
   ```

2. Import into your project
   ```
   <script>
   import SvgIcon from '@jamescoyle/vue-icon'
   import { mdiAccount } from '@mdi/js'
   </script>

   <SvgIcon type="mdi" path={mdiAccount}></SvgIcon>
   ```
