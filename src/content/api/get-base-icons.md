### Get Base Icons by Id

```text
GET api/icon/:baseIconId/base
```

tabs:
tab:get-icon-base-description Description
tab:get-icon-base-response Response
tabContent:get-icon-base-description

A base icon is the most primative version of an icon. For instance `account-plus` has the base icon of `account`. This endpoint will retrieve all the icons with the same `baseIconId`.

/tabContent
tabContent:get-icon-base-response

```yaml
type: array
items:
  $ref: '#/api/model/icon'
```

/tabContent
/tabs