### POST Admin Icon Style

```text
POST api/admin/icon/style
```

tabs:
tab:post-icon-style-description Description
tab:post-icon-style-request Request
tab:post-icon-style-response Response
tabContent:post-icon-style-description

Toggle `icon.styles` on or off. For instance an icon called `account-outline` should have the `outline` style.

/tabContent
tabContent:post-icon-style-request

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

/tabContent
tabContent:post-icon-style-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs