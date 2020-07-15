### Get Admin Package Fonts

```
GET api/admin/package/:package_id/font
```

tabs
tab Description

Retrieve an array of fonts for a given package.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/font'
```

/tab
/tabs