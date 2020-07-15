### POST Admin Icon Description

```
POST api/admin/icon/description
```

tabs
tab Description

Update `icon.description` in a Markdown string.

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
      description:
        type: string
        format: markdown
        example: Icon Description.
```

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs