### Get Icon by Name

```text
GET api/package/:packageId/:iconName
```

tabs:
tab:get-icon-by-name-description Description
tab:get-icon-by-name-response Response
tabContent:get-icon-by-name-description

Icon names are unique across a package. This means a package id is also required when making the request as icons across packages share names.

/tabContent
tabContent:get-icon-by-name-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs