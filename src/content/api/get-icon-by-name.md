### Get Icon by Name

```
GET api/package/:packageId/:iconName
```

tabs
tab Description

Icon names are unique across a package. This means a package id is also required when making the request as icons across packages share names.

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs