# Brand and Logo Icons

Brand or logo icons are icons that represent a company and/or product logo. Some examples may include the Facebook logo, the VLC logo, the Square logo, etc.

## Brand Icons in Material Design Icons

As Material Design Icons has continued to rapidly grow, we've decided to take a step back and reaffirm our mission:

> Material Design Icons is an icon library dedicated to providing high-quality icons that follow [Material design principles](https://material.io/design/iconography/system-icons.html#design-principles).

Keeping that mission in mind, brand and logo icons are simply not _Material_. Additionally, we have had issues dealing with logos that don't work well in a single color, don't fit in a distinguishable way within a 24x24dp artboard, or are just very obscure logos to begin with. It is very easy to say that we do not feel that we have served this niche of icons well.

**Moving forward, we are no longer accepting new brand or logo icons into the Material Design Icons library.***

> We _may_ consider technology-related logo icons based around development (e.g. Webpack) for well-known tools, but these will be done on a case-by-case basis.

## Frequently Asked Questions

### What will happen with current brand icons in MDI?

We have selected several brand and logo icons currently included in MDI which we feel are no longer a good fit for the library. These brand and logos icons will continue to be available until the `v5.0.x` release, at which time they will be permanently removed.

### Where should I get my brand and logo icons from?

We _highly_ recommend our friends over at [SimpleIcons](https://simpleicons.org/) to serve your brand icon needs. SimpleIcons is a full icon library specifically designed for brand and logo icons. They offer their [icon package on npm](https://www.npmjs.com/package/simple-icons) and provide SVG and JavaScript interfaces to include the icons into your project. Additionally, they have a CDN available if you do not wish to host the icons yourself.

### What logos have been deprecated?

**Legend:** mdi:check Available mdi:clock Awaiting release mdi:progress-clock Not yet available mdi:thumb-down-outline Deprecated mdi:close Not available

| Icon | MDI | SI | Note(s) |
| ---- | --- | -- | ------- |
| mdi:accusoft | mdi:thumb-down-outline | mdi:check |
| mdi:android-head | mdi:check | mdi:check | Available in both libraries as `android` |
| mdi:basecamp | mdi:thumb-down-outline | mdi:check |
| mdi:beats | mdi:thumb-down-outline | mdi:check | SI name: `beatsbydre`
| mdi:behance | mdi:thumb-down-outline | mdi:check |
| mdi:blackberry | mdi:thumb-down-outline | mdi:check |
| mdi:dribbble | mdi:thumb-down-outline | mdi:check |
| mdi:dribbble-box | mdi:thumb-down-outline | mdi:close | Variants are outside the scope of SI |
| mdi:etsy | mdi:thumb-down-outline | mdi:check |
| mdi:eventbrite | mdi:thumb-down-outline | mdi:check |
| mdi:flattr | mdi:thumb-down-outline | mdi:check |
| mdi:foursquare | mdi:thumb-down-outline | mdi:check |
| mdi:glassdoor | mdi:thumb-down-outline | mdi:check |
| mdi:houzz | mdi:thumb-down-outline | mdi:check |
| mdi:houzz-box | mdi:thumb-down-outline | mdi:close | Variants are outside the scope of SI |
| mdi:instapaper | mdi:thumb-down-outline | mdi:check |
| mdi:itunes | mdi:thumb-down-outline | mdi:check |
| mdi:lastfm | mdi:thumb-down-outline | mdi:check |
| mdi:lyft | mdi:thumb-down-outline | mdi:check |
| mdi:mail-ru | mdi:thumb-down-outline | mdi:check | SI name: `mail-dot-ru`
| mdi:maxcdn | mdi:thumb-down-outline | mdi:close | Renamed and available as `stackpath`. Will be replaced with same in MDI v4.8.95.
| mdi:medium | mdi:thumb-down-outline | mdi:check |
| mdi:meetup | mdi:thumb-down-outline | mdi:check |
| mdi:mixcloud | mdi:thumb-down-outline | mdi:check |
| mdi:paypal | mdi:thumb-down-outline | mdi:check |
| mdi:periscope | mdi:thumb-down-outline | mdi:check |
| mdi:pocket | mdi:thumb-down-outline | mdi:check |
| mdi:quicktime | mdi:thumb-down-outline | mdi:check |
| mdi:shopify | mdi:thumb-down-outline | mdi:check |
| mdi:slackware | mdi:thumb-down-outline | mdi:clock |
| mdi:square-inc | mdi:thumb-down-outline | mdi:check | SI name: `square` |
| mdi:square-inc-cash | mdi:thumb-down-outline | mdi:check | SI name: `cashapp`
| mdi:strava | mdi:thumb-down-outline | mdi:check |
| mdi:tor | mdi:thumb-down-outline | mdi:check |
| mdi:tumblr | mdi:thumb-down-outline | mdi:check |
| mdi:tumblr-box | mdi:thumb-down-outline | mdi:close | Variants are outside the scope of SI |
| mdi:tumblr-reblog | mdi:thumb-down-outline | mdi:close |
| mdi:uber | mdi:thumb-down-outline | mdi:check |
| mdi:venmo | mdi:thumb-down-outline | mdi:check | SI use the full wordmark |
| mdi:wunderlist | mdi:thumb-down-outline | mdi:close | Service deprecated by Microsoft |
| mdi:xda | mdi:thumb-down-outline | mdi:check | SI name: `xda-developers` |
| mdi:yelp | mdi:thumb-down-outline | mdi:check |

### I use Home Assistant, will I be affected by this change?

Most likely not as none of the deprecated icons are specific to home automation. If there is a new brand icon you would like to use in Home Assistant, that will require some changes on Home Assistant's part to support other icon libraries. We have communicated our intent with Home Assistant and [have opened a feature request](https://community.home-assistant.io/t/material-design-icons-simpleicons-add-support-for-simpleicons-library/108765), asking them to add support for SimpleIcons to provide an avenue for new brand and logo icons.

### I use some other project that relies on MDI for their icons, will I be affected?

It really depends on if you are using brand or logo icons. If you are, we recommend opening an issue with the project that is integrating MDI to alert them to the upcoming changes.

### I use MDI's helper libraries, such as `@mdi/react`. Is this compatible with SimpleIcons?

Yes! Our react component takes raw SVG path data to render an icon. SimpleIcons also returns the combined path data of their icons, so you can simply use `@mdi/react` like this:

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
