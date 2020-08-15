### Post Admin User

```
POST api/admin/user
```

tabs
tab Description

Insert a new `user` into the database. These users are readonly and cannot be logged into.

> **Note:** This API requires elevated `core` access.

/tab
tab Request

```yaml
type: object
properties:
  user:
    type: object
    properties:
      name:
        type: string
      github:
        type: string
      email:
        type: string
        format: email
      twitter:
        type: string
      avatar:
        type: string
        format: base64
      description:
        type: string
      website:
        type: string
      sponsored:
        type: boolean
```

/tab
tab Response

```yaml
$ref: '#/api/model/user'
```

/tab
/tabs