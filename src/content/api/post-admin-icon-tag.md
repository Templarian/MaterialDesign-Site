### Post Admin Icon Tag

```
POST api/admin/icon/tag
```

tabs
tab Description

Inserts `tag` into the database for an icon.

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
  tag:
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