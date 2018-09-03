# Icon Naming

MDI has strong guidelines setup to ensure naming of every icon is as _consistent_ and expandable as possible.

## Base Names

Base names are generally the noun representation of an icon. In some cases this may also be the more common software term for the icon.

Examples: `comment`, `folder`, or `flask`

## Hyphen Tagging

All naming must be in the exact order below.

| Position   | Weight    | Overlay      | Modifier     |
|------------|-----------|--------------|--------------|
| `*-top`    | `*-bold`  | `*-alert`    | `*-multiple` |
| `*-bottom` | `*-thick` | `*-arrow-*`  | `*-variant`  |
| `*-up`     |           | `*-network`  | `*-off`      |
| `*-down`   |           | `*-settings` | `*-outline`  |
| `*-left`   |           | `*-plus`     |              |
| `*-right`  |           | `*-minus`    |              |
|            |           | `*-remove`   |              |
|            |           | `*-search`   |              |

![alert](/assets/resources/grid-96-alert.svg)
![arrow-right](/assets/resources/grid-96-arrow-right-bottom-right.svg)
![network](/assets/resources/grid-96-network.svg)
![settings](/assets/resources/grid-96-settings.svg)
![plus](/assets/resources/grid-96-plus-bottom-right.svg)
![minus](/assets/resources/grid-96-minus-bottom-right.svg)
![remove](/assets/resources/grid-96-remove-bottom-right.svg)
![search](/assets/resources/grid-96-search-bottom-right.svg)
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
