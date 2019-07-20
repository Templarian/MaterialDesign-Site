### Get List of Packages

```text
GET api/packages
```

tabs:
tab:get-package-description Description
tab:get-package-response Response
tabContent:get-package-description

A package is a named grouping of icons. Example: `Material Design Icons`. This endpoint lists the packages, but leaves off the `icons` object for performance reasons.

/tabContent
tabContent:get-package-response

```yaml
type: array
items:
  $ref: '#/api/package'
```

/tabContent
/tabs