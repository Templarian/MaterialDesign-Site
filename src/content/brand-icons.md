# Brand and Logo Icons

Brand or logo icons are icons that represent a company and/or product logo. Some examples may include the Facebook logo, the Fedora linux distribution logo, the Xbox logo, etc.

## Brand Icons in Material Design Icons

As Material Design Icons has continued to rapidly grow, we've decided to take a step back and reaffirm our mission:

> Material Design Icons is an icon library dedicated to providing high-quality icons that follow [Material design principles][1].

Keeping that mission in mind, brand and logo icons are simply not _Material_. Additionally, we have had issues dealing with logos that don't work well in a single color, don't fit in a distinguishable way within a 24x24dp artboard, or are just very obscure logos to begin with. It is very easy to say that we do not feel that we have served this niche of icons well.

**Moving forward, we are no longer accepting new brand or logo icons into the Material Design Icons library.***

\* We _may_ consider technology-related logo icons based around development (e.g. Webpack) for well-known tools, but these will be done on a case-by-case basis.

## Frequently Asked Questions

### What will happen with current brand icons in MDI?

We are unsure about the future of the current brand and logo icons in MDI. For now, all current brand and logo icons available as of v3.6.95 will continue to be available for the foreseeable future. At some point, we may decide to deprecate and remove existing brand and logo icons. If we do that, we will make an announcement and provide ample time for our users to update their code to use alternative icon sources for their brand and logo icons.

### Where should I get my brand and logo icons from?

We highly recommend our friends over at [SimpleIcons][2] to serve your brand icon needs. SimpleIcons is a full icon library specifically designed for brand and logo icons. They offer their [icon package on npm][3] and provide SVG and JavaScript interfaces to include the icons into your project. Additionally, they have a CDN available if you do not wish to host the icons yourself.

### I use Home Assistant, will I be affected by this change?

Most likely not as we do not provide many brands specific to home automation. Current brand icons in the MDI library will remain unchanged for now, but if there is a new brand icon you would like to use in Home Assistant, that will require some changes on Home Assistant's part to support other icon libraries. We have communicated our intent with Home Assistant and [have opened a feature request][4], asking them to add support for SimpleIcons to provide an avenue for new brand and logo icons.

### I use some other project that relies on MDI for their icons, will I be affected?

It really depends on if you are using brand or logo icons. If you are, we recommend opening an issue with the project that is integrating MDI to alert them to the upcoming changes.

### I use MDI's helper libraries, such as `@mdi/react`. Is this compatible with SimpleIcons?

It will be soon! `@mdi/react` simple takes raw SVG path data to render an icon. [Once SimpleIcons begins returning the combined path data in their module][5], you can simply use `@mdi/react` like this:

```jsx
import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import google from 'simple-icons/icons/google';

function App() {
  return (
    <div>
      <Icon path={mdiAccount} />
      <Icon path={google.path} />
    </div>
  );
}
```

[1]: https://material.io/design/iconography/system-icons.html#design-principles
[2]: https://simpleicons.org/
[3]: https://www.npmjs.com/package/simple-icons
[4]: https://community.home-assistant.io/t/material-design-icons-simpleicons-add-support-for-simpleicons-library/108765
[5]: https://github.com/simple-icons/simple-icons/issues/1272
