### Get Icon by Name

Icon names are unique across a package. This means a package id is also required when making the request as icons across packages share names.

```
GET api/package/:packageId/:iconName
```

```yaml
$ref: '#/api/model/icon'
```