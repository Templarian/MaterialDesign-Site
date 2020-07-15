### Get Styles

```
GET api/:packageId/style
```

tabs
tab Description

Styles are documented in the icon naming guidelines. Examples include `box`, `circle`, `outline`, `off`. This endpoint requires the `packageId` so that it can return the count of each style.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/style'
```

/tab
/tabs