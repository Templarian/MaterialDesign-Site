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

tabs:
tab:naming-alert icon:alert-box
tab:naming-arrow icon:arrow-right-bold-box
tab:naming-network icon:network
tab:naming-settings icon:settings-helper
tab:naming-plus icon:plus-box
tab:naming-minus icon:minus-box
tab:naming-remove icon:close-box
tab:naming-search icon:magnify
tabContent:naming-alert

The alerts modifer can be shown inside of an icon or to the right.

![alert](/assets/resources/grid-96-alert.svg)

/tabContent
tabContent:naming-arrow

The arrow modifer can point in any direction and should be placed in the bottom right.

![arrow-right](/assets/resources/grid-96-arrow-right-bottom-right.svg)

/tabContent
tabContent:naming-network

The network modifer should only be used to dipict a network connected device or object.

![network](/assets/resources/grid-96-network.svg)

/tabContent
tabContent:naming-settings

The settings modifer in Material Design should be depicted by three dots and not a `cog` or `gear`.

![settings](/assets/resources/grid-96-settings.svg)

/tabContent
tabContent:naming-plus

The plus modifier can be appended to any noun icon.

![plus](/assets/resources/grid-96-plus-bottom-right.svg)

/tabContent
tabContent:naming-minus

The minus modifier can be appended to any noun icon.

![minus](/assets/resources/grid-96-minus-bottom-right.svg)

/tabContent
tabContent:naming-remove

The remove modifier can be appended to any noun icon.

![remove](/assets/resources/grid-96-remove-bottom-right.svg)

/tabContent
tabContent:naming-search

The search modifier can be appended to any noun icon to depict the ability to search the object.

![search](/assets/resources/grid-96-search-bottom-right.svg)

/tabContent
/tabs

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
