### Post Admin Icon Optimize

```
POST api/admin/icon/optimize
```

tabs
tab Description

Optimize `icon.data` with SVGO. This is used to preview the change and will not touch the database.

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