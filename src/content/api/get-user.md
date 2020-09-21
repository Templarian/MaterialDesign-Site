### Get Users

```
GET api/user
GET api/package/:packageId/user
GET api/package/:packageId/user/core
```

tabs
tab Description

Retrieve all users. An alternative is to get users for only a single package or just the core users assigned to maintain that package.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/user'
```

/tab
/tabs