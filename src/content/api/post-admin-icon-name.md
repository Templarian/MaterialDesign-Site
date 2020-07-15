### POST Admin Icon Name

```text
POST api/admin/icon/name
```

tabs
tab Description

Update `icon.name` to rename an icon.

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
      name:
        type: string
        example: new-name
```

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs