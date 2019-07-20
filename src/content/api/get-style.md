### Get Styles

```text
GET api/:packageId/style
```

tabs:
tab:get-style-description Description
tab:get-style-response Response
tabContent:get-style-description

Styles are documented in the icon naming guidelines. Examples include `box`, `circle`, `outline`, `off`. This endpoint requires the `packageId` so that it can return the count of each style.

/tabContent
tabContent:get-style-response

```yaml
type: array
items:
  $ref: '#/api/model/style'
```

/tabContent
/tabs