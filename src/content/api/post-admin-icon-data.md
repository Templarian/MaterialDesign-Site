### POST Admin Icon Path Data

```text
POST api/admin/icon/data
```

tabs:
tab:post-icon-data-description Description
tab:post-icon-data-request Request
tab:post-icon-data-response Response
tabContent:post-icon-data-description

Update `icon.data`.

/tabContent
tabContent:post-icon-data-request

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
tabContent:post-icon-data-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs