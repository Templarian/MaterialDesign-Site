### Get Users

This queries all users (aka contributors) in the database.

```
GET api/user
```

```yaml
type: array
items:
  $ref: '#/api/model/user'
```