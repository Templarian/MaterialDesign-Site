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
    name":
      type: integer
    width":
      type: integer
    height":
      type: integer
    version:
      type: object
      properties:
        major:
          type: integer
        minor:
          type: integer
        patch:
          type: integer
- icons:
  id:
    type: string
```