### Get Admin Package Fonts

```text
GET api/admin/package/:package_id/font
```

tabs:
tab:get-package-font-description Description
tab:get-package-font-response Response
tabContent:get-package-font-description

Retrieve an array of fonts for a given package.

/tabContent
tabContent:get-package-font-response

```yaml
type: array
items:
  $ref: '#/api/model/font'
```

/tabContent
/tabs