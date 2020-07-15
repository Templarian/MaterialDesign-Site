### Get Base Icons by Id

```
GET api/icon/:baseIconId/base
```

tabs
tab Description

A base icon is the most primative version of an icon. For instance `account-plus` has the base icon of `account`. This endpoint will retrieve all the icons with the same `baseIconId`.

/tab
tab Response

```yaml
type: array
items:
  $ref: '#/api/model/icon'
```

/tab
/tabs