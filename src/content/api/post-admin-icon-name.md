### POST Admin Icon Name

```text
POST api/admin/icon/name
```

tabs:
tab:post-icon-name-description Description
tab:post-icon-name-request Request
tab:post-icon-name-response Response
tabContent:post-icon-name-description

Update `icon.name` to rename an icon.

/tabContent
tabContent:post-icon-name-request

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

/tabContent
tabContent:post-icon-name-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs