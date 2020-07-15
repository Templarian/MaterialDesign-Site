# Icon Naming

MDI has strong guidelines setup to ensure naming of every icon is as _consistent_ and expandable as possible.

## Base Names

Base names are generally the noun representation of an icon. In some cases this may also be the more common software term for the icon.

Examples: `comment`, `folder`, or `flask`

## Hyphen Tagging

All naming must be in the exact order below.

| Position          | Weight    | Overlay      | Modifier     |
|-------------------|-----------|--------------|--------------|
| `*-top-left`      | `*-bold`  | `*-alert`    | `*-variant`  |
| `*-top-right`     | `*-thick` | `*-arrow-*`  | `*-multiple` |
| `*-bottom-left`   |           | `*-network`  | `*-off`      |
| `*-bottom-right`  |           | `*-settings` | `*-outline`  |
| `*-up`            |           | `*-plus`     |              |
| `*-down`          |           | `*-minus`    |              |
| `*-left`          |           | `*-remove`   |              |
| `*-right`         |           | `*-search`   |              |
|                   |           | `*-question` |              |

### Position

All position modifiers should be used to describe the direction an icon is pointing.

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
/tabs

tabs Other
tab Alert

The alerts modifer can be shown inside of an icon or to the right.

![alert](/assets/resources/grid-96-alert.svg)

/tab
tab Arrow

The arrow modifer can point in any direction and should be placed in the bottom right.

![arrow-right](/assets/resources/grid-96-arrow-right-bottom-right.svg)

/tab
tab Network

The network modifer should only be used to dipict a network connected device or object.

![network](/assets/resources/grid-96-network.svg)

/tab
tab Settings

The settings modifer in Material Design should be depicted by three dots and not a `cog` or `gear`.

![settings](/assets/resources/grid-96-settings.svg)

/tab
tab Magnify

The search modifier can be appended to any noun icon to depict the ability to search the object.

![search](/assets/resources/grid-96-search-bottom-right.svg)

/tab
/tabs

### Modifier

Modifiers are consistent across all icons in their representation.

tabs
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
- `settings` modifier is represented in Material Design as three dots (`...`) not a `cog` or `gear`.
- `plus` is always used to represent adding (do not use `add`).
- `minus` is always used to represent subtracting.
- `multiple` should be used on layered icons where there is a singular representation present.
- `format-*` breaks all the rules. Because.
- `help` is a base icon, `*-question` is a modifer.

## Notice a Bug?

If you ever notice a bug in a name or think it does not follow these guidelines please open an [issue](https://github.com/Templarian/MaterialDesign/issues).
