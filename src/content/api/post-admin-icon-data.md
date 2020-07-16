### Post Admin Icon Path Data

```
POST api/admin/icon/data
```

tabs
tab Description

Update `icon.data`.

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
      data:
        type: string
        example: M...Z
```

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs