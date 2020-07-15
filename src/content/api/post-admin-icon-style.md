### POST Admin Icon Style

```text
POST api/admin/icon/style
```

tabs
tab Description

Toggle `icon.styles` on or off. For instance an icon called `account-outline` should have the `outline` style.

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
  style:
    type: object
    properties:
      id:
        type: string
        format: uuid
```

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs