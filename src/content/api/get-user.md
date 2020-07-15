### Get Users

```
GET api/user
GET api/package/:packageId/user
```

tabs
tab Description

Retrieve all users.  An alternative is to get users for only a single package.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/user'
```

/tab
/tabs