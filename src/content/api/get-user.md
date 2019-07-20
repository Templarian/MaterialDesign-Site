### Get Users

```text
GET api/user
GET api/package/:packageId/user
```

tabs:
tab:get-user-by-id-description Description
tab:get-user-by-id-response Response
tabContent:get-user-by-id-description

Retrieve all users.  An alternative is to get users for only a single package.

/tabContent
tabContent:get-user-by-id-response

```yaml
type: array
items:
  $ref: '#/api/model/user'
```

/tabContent
/tabs