# Icon Naming

MDI has strong guidelines setup to ensure naming of every icon is as _consistent_ and expandable as possible.

## Base Names

Base names are generally the noun representation of an icon. In some cases this may also be the more common software term for the icon.

Examples: `comment`, `folder`, or `flask`

## Hyphen Tagging

All naming must be in the exact order below.

| Position          | Weight    | Overlay      | Modifier     |
|-------------------|-----------|--------------|--------------|
| `*-top-left`      | `*-bold`  | `*-alert`    | `*-multiple` |
| `*-top-right`     | `*-thick` | `*-arrow-*`  | `*-variant`  |
| `*-bottom-left`   |           | `*-network`  | `*-off`      |
| `*-bottom-right`  |           | `*-settings` | `*-outline`  |
| `*-up`            |           | `*-plus`     |              |
| `*-down`          |           | `*-minus`    |              |
| `*-left`          |           | `*-remove`   |              |
| `*-right`         |           | `*-search`   |              |

### Position

All position modifiers should be used to describe the direction an icon is pointing.

### Overlay

tabs:Overlay
tab:intro-content icon:alert-box
tab:intro-install icon:arrow-right-bold-box
tab:intro-css icon:network
tab:intro-css icon:settings-helper
tab:intro-css icon:plus-box
tab:intro-css icon:minus-box
tab:intro-css icon:close-box
tab:intro-css icon:magnify
tabContent:intro-content

/tabContent
/tabs

#### Alert

![alert](/assets/resources/grid-96-alert.svg)

#### Arrow Right

![arrow-right](/assets/resources/grid-96-arrow-right-bottom-right.svg)

#### Network

![network](/assets/resources/grid-96-network.svg)

#### Settings

![settings](/assets/resources/grid-96-settings.svg)

#### Plus

![plus](/assets/resources/grid-96-plus-bottom-right.svg)

#### Minus

![minus](/assets/resources/grid-96-minus-bottom-right.svg)

#### Remove

![remove](/assets/resources/grid-96-remove-bottom-right.svg)

#### Search

![search](/assets/resources/grid-96-search-bottom-right.svg)

### Modifier

Modifiers are consistent across all icons in their representation.

#### Multiple

![multiple](/assets/resources/grid-96-multiple.svg)

#### Off

![off](/assets/resources/grid-96-off.svg)

## Additional Details

- `outline` must only be used on `2dp` lined icons.
- `variant` is only to be used to represent the same icon with the same meaning.
- `close` is never to be used to represent a `x` on an icon other than the `close-*`. Use `*-remove` for these instances.
- `settings` modifier is represented in Material Design as three dots (`...`) not a `cog` or `gear`.
- `plus` is always used to represent adding (do not use `add`).
- `minus` is always used to represent subtracting.
- `multiple` should be used on layered icons where there is a singular representation present.
- `format-*` breaks all the rules. Because.

## Notice a Bug?

If you ever notice a bug in a name or think it does not follow these guidelines please open an [issue](https://github.com/Templarian/MaterialDesign/issues).
