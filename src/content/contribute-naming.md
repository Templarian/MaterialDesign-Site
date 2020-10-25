# Icon Naming

MDI has strong guidelines setup to ensure naming of every icon is as _consistent_ and expandable as possible.

## Base Names

Base names are generally the noun representation of an icon. In some cases this may also be the more common software term for the icon.

Examples: `comment`, `folder`, or `flask`

## Hyphen Tagging

All naming must be in the exact order below.

| Position         | Weight    | Shape        | Overlay         | Modifier     |
|------------------|-----------|--------------|-----------------|--------------|
| `*-top-left`     | `*-bold`  | `*-box`      | `*-account`     | `*-variant`  |
| `*-top-right`    | `*-thick` | `*-circle`   | `*-alert`       | `*-multiple` |
| `*-bottom-left`  |           | `*-decagram` | `*-arrow-*`     | `*-off`      |
| `*-bottom-right` |           | `*-octagram` | `*-cancel`      | `*-outline`  |
| `*-up`           |           | `*-rhombus`  | `*-check`       |              |
| `*-down`         |           | `*-shield`   | `*-clock`       |              |
| `*-left`         |           |              | `*-cog`         |              |
| `*-right`        |           |              | `*-edit`        |              |
|                  |           |              | `*-eye`         |              |
|                  |           |              | `*-heart`       |              |
|                  |           |              | `*-information` |              |
|                  |           |              | `*-image`       |              |
|                  |           |              | `*-key`         |              |
|                  |           |              | `*-lock`        |              |
|                  |           |              | `*-marker`      |              |
|                  |           |              | `*-minus`       |              |
|                  |           |              | `*-music`       |              |
|                  |           |              | `*-network`     |              |
|                  |           |              | `*-percent`     |              |
|                  |           |              | `*-plus`        |              |
|                  |           |              | `*-question`    |              |
|                  |           |              | `*-refresh`     |              |
|                  |           |              | `*-remove`      |              |
|                  |           |              | `*-search`      |              |
|                  |           |              | `*-settings`    |              |
|                  |           |              | `*-star`        |              |
|                  |           |              | `*-sync`        |              |
|                  |           |              | `*-text`        |              |

### Position

All position modifiers should be used to describe the direction an icon is pointing.

### Weight

Weight of the icon, essentially the thickness.

tabs Weight
tab Bold

![bold](/assets/resources/grid-96-bold.svg)

/tab
tab Thick

![thick](/assets/resources/grid-96-thick.svg)

/tab
/tabs

### Shape

tabs Shape
tab Box

![box](/assets/resources/grid-96-box.svg)

/tab
tab Circle

![circle](/assets/resources/grid-96-circle.svg)

/tab
tab Decagram

/tab
tab Octagram

/tab
tab Rhombus

/tab
tab Shield

/tab
/tabs

### Overlay

tabs Standard
tab Plus

The plus modifier can be appended to any noun icon.

![plus](/assets/resources/grid-96-plus-bottom-right.svg)

/tab
tab Minus

The minus modifier can be appended to any noun icon.

![minus](/assets/resources/grid-96-minus-bottom-right.svg)

/tab
tab Remove

The remove modifier can be appended to any noun icon.

![remove](/assets/resources/grid-96-remove-bottom-right.svg)

/tab
tab Check

The check modifier can be appended to any noun icon.

![check](/assets/resources/grid-96-check.svg)

/tab
/tabs

tabs Other
tab Account

The account modifer can be shown inside of an icon or to the right.

![account](/assets/resources/grid-96-account.svg)

/tab
tab Alert

The alerts modifer can be shown inside of an icon or to the right.

![alert](/assets/resources/grid-96-alert.svg)

/tab
tab Arrow

The arrow modifer can point in any direction and should be placed in the bottom right.

![arrow-right](/assets/resources/grid-96-arrow-right-bottom-right.svg)

/tab
tab Cancel

The cancel modifer can be shown inside of an icon or placed in the bottom right.

/tab
tab Clock

The clock modifier should be placed in the bottom right.

![clock](/assets/resources/grid-96-clock.svg)

/tab
tab Cog

The cog modifer can be shown inside of an icon or placed in the bottom right, however the `settings` modifier may be preferred.

/tab
tab Edit

The edit modifier can be appended to any noun icon to depict the ability to edit the object.

![edit](/assets/resources/grid-96-edit.svg)

/tab
tab Eye

The eye modifer can be shown inside of an icon or placed in the bottom right.

/tab
tab Heart

The heart modifer can be shown inside of an icon or placed in the bottom right.

![heart](/assets/resources/grid-96-heart.svg)

/tab
tab Information

The information modifer can be shown inside of an icon or placed in the bottom right.

/tab
tab Image

The image modifer can be shown inside of an icon.

/tab
tab Key

The key modifer can be shown inside of an icon or placed in the bottom right.

![key](/assets/resources/grid-96-key.svg)

/tab
tab Lock

The lock modifer can be shown inside of an icon or placed in the bottom right, however each has a different lock design.

![lock](/assets/resources/grid-96-lock.svg)

/tab
tab Marker

The marker modifer can be shown inside of an icon or placed in the bottom right.

/tab
tab Music

The music modifer can be shown inside of an icon or placed in the bottom right.

/tab
tab Network

The network modifer should only be used to dipict a network connected device or object.

![network](/assets/resources/grid-96-network.svg)

/tab
tab Percent

The percent modifer can be shown inside of an icon.

/tab
tab Question

The question mark modifer can be shown inside of an icon or to the right.

![question](/assets/resources/grid-96-question.svg)

/tab
tab Refresh

The refresh modifier can be appended to any noun icon to depict the ability to refresh the object.

/tab
tab Search

The search modifier can be appended to any noun icon to depict the ability to search the object.

![search](/assets/resources/grid-96-search-bottom-right.svg)

/tab
tab Settings

The settings modifer should be depicted by three dots, however the `cog` modifier may be preferred.

![settings](/assets/resources/grid-96-settings.svg)

/tab
tab Star

The star modifer can be shown inside of an icon or to the right.

![star](/assets/resources/grid-96-star.svg)

/tab
tab Sync

The sybc modifier can be appended to any noun icon to depict the ability to sync the object.

/tab
tab Text

The text modifer should be depicted by two or three horizontal lines inside an icon.

/tab
/tabs

### Modifier

Modifiers are consistent across all icons in their representation.

tabs
tab Variant

Alternative design of an existing icon.

![variant](/assets/resources/grid-96-variant.svg)

/tab
tab Multiple

![multiple](/assets/resources/grid-96-multiple.svg)

/tab
tab Off

![off](/assets/resources/grid-96-off.svg)

/tab
tab Outline

2dp outline of an existing filled icon.

/tab
/tabs

## Additional Details

- `outline` must only be used on `2dp` lined icons.
- `variant` is only to be used to represent the same icon with the same meaning.
- `close` is never to be used to represent a `x` on an icon other than the `close-*`. Use `*-remove` for these instances.
- `settings` modifier is usually represented in Material Design as three dots, however the `cog` modifier may be preferred.
- `plus` is always used to represent adding (do not use `add`).
- `minus` is always used to represent subtracting.
- `multiple` should be used on layered icons where there is a singular representation present.
- `format-*` breaks all the rules. Because.
- `help` is a base icon, `*-question` is a modifer.

## Notice a Bug?

If you ever notice a bug in a name or think it does not follow these guidelines please open an [issue](https://github.com/Templarian/MaterialDesign/issues).
