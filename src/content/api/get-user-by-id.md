### Get User by Id

```
GET api/user/:userId
GET api/package/:packageId/user/:userId
```

tabs
tab Description

Retrieve a single user (aka contributor). Using the alternative url with `packageId` will filter the `iconCount` to a specific `packageId`.

/tab
tab Response

```yaml
$ref: '#/api/model/user'
```

/tab
/tabs