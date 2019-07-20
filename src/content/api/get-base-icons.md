### Get Base Icons by Base Icon Id

Retrieve a list of icons that share the same `baseIconId`.

```text
GET api/icon/:baseIconId/base
```

```yaml
type: array
items:
  $ref: '#/api/model/icon'
```