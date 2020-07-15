### POST Admin Icon Alias

```
POST api/admin/icon/alias
```

tabs
tab Description

Aliasing icons with alternative names allows others to find them. For example `account` may also be known as `user` or `person`.

/tab
tab Request

```yaml
type: object
properties:
  icon:
    type: object
    properties:
      id:
        type: string
        format: uuid
  alias:
    type: object
    properties:
      name:
        type: string
        example: user
```

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs