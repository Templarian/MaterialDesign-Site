### Get Tags

```
GET api/:packageId/tag
```

tabs
tab Description

A list of tags used to group icons in the system. If count is 0 the item will not be returned.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/tag'
```

/tab
/tabs