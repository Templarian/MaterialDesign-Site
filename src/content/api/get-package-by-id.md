### Get Package By Id

```
GET api/package/:packageId
```

tabs
tab Description

Search through a package of icons.

/tab
tab Request

There are various ways to filter the icon results by appending various parameters.

```text
?search=account
?name=account,account-plus
?uuid=
?author=uuid
?author=community
```

/tab
tab Response

```yaml
$ref: '#/api/model/package'
```

/tab
/tabs