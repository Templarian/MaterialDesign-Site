### Get Admin Icon Modifications

```
GET api/admin/icon/:iconId/modification
```

tabs
tab Description

Every modification to an icon property is tracked. This returns a list of those modifications.

> `isVisible = false` hides a modification from the public.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/modification'
```

/tab
/tabs