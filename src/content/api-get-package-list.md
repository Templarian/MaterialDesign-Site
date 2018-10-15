### Get Icon List in Package

```text
GET api/package/:packageId
```

```yaml
$ref: '#/api/icon'
```

There are also various ways to filter the icon results by appending various parameters.

```text
?search=account
?name=account,account-plus
?uuid=
?author=uuid
?author=community
```