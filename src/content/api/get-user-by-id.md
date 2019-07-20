### Get User by Id

```text
GET api/user/:userId
GET api/package/:packageId/user/:userId
```

tabs:
tab:get-user-description Description
tab:get-user-response Response
tabContent:get-user-description

Retrieve a single user (aka contributor). Using the alternative url with `packageId` will filter the `iconCount` to a specific `packageId`.

/tabContent
tabContent:get-user-response

```yaml
$ref: '#/api/model/user'
```

/tabContent
/tabs