### POST Admin Icon Description

```text
POST api/admin/icon/description
```

tabs:
tab:post-icon-description-description Description
tab:post-icon-description-request Request
tab:post-icon-description-response Response
tabContent:post-icon-description-description

Update `icon.description` in a Markdown string.

/tabContent
tabContent:post-icon-description-request

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

/tabContent
tabContent:post-icon-description-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs