### POST Admin Icon Alias

tabs:
tab:post-icon-alias-description Description
tab:post-icon-alias-request Request
tab:post-icon-alias-response Response
tabContent:post-icon-alias-description

Aliasing icons with alternative names allows others to find them. For example `account` may also be known as `user` or `person`.

/tabContent
tabContent:post-icon-alias-request

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

/tabContent
tabContent:post-icon-alias-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs