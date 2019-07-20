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
  type: object
  properties:
    id:
      type: string
      format: uuid
      example: 38EF63D0-4744-11E4-B3CF-842B2B6CFE1B
    name:
      type: integer
      example: Material Design Icons
    width:
      type: integer
      example: 24
    height:
      type: integer
      example: 24
    version:
      $ref: '#/api/version'
    icons:
      type: array
      items:
        $ref: '#/api/icon'
```

/tabContent
/tabs