### Get Icon by Id

Retrieve a single icon and all public properties at once. Note looping this is very slow as it uses no cache layer to ensure the latest data.

```text
GET api/icon/:iconId
```

```yaml
$ref: '#/api/model/icon'
```