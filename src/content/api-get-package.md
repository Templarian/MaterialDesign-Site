### Get List of Packages

```text
GET api/packages
```

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
      $ref: '#/api/icon'
```