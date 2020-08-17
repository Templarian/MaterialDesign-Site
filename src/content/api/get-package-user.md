### Get Package User

```
POST api/package/:packageId/user
```

tabs
tab Description

List all `user` objects associated to a `packageId`.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/user'
```

/tab
/tabs