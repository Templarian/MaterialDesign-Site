### Get List of Packages

```
GET api/packages
```

tabs
tab Description

A package is a named grouping of icons. Example: `Material Design Icons`. This endpoint lists the packages, but leaves off the `icons` object for performance reasons.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/package'
```

/tab
/tabs