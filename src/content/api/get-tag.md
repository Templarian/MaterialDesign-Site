### Get Tags

```text
GET api/:packageId/tag
```

tabs:
tab:get-tag-description Description
tab:get-tag-response Response
tabContent:get-tag-description

A list of tags used to group icons in the system. If count is 0 the item will not be returned.

/tabContent
tabContent:get-tag-response

```yaml
type: array
items:
  $ref: '#/api/model/tag'
```

/tabContent
/tabs