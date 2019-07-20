### Get a List of Styles

Styles are documented in the icon naming guidelines. Examples include `box`, `circle`, `outline`, `off`. This endpoint requires the `packageId` so that it can return the count of each style.

```
GET api/style/:packageId
```

```yaml
type: array
items:
  $ref: '#/api/model/style'
```