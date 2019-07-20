### GET Admin Icon Modifications

```text
GET api/admin/icon/:iconId/modification
```

tabs:
tab:post-icon-modification-description Description
tab:post-icon-modification-response Response
tabContent:post-icon-modification-description

Every modification to an icon property is tracked. This returns a list of those modifications.

> `isVisible = false` hides a modification from the public.

/tabContent
tabContent:post-icon-modification-response

```yaml
type: array
items:
  $ref: '#/api/model/modification'
```

/tabContent
/tabs