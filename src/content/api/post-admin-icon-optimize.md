### POST Admin Icon Optimize

```text
POST api/admin/icon/optimize
```

tabs:
tab:post-icon-optimize-description Description
tab:post-icon-optimize-request Request
tab:post-icon-optimize-response Response
tabContent:post-icon-optimize-description

Optimize `icon.data` with SVGO. This is used to preview the change and will not touch the database.

/tabContent
tabContent:post-icon-optimize-request

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

/tabContent
tabContent:post-icon-optimize-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs