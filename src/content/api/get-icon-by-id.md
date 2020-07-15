### Get Icon by Id

```
GET api/icon/:iconId
```

tabs
tab Description

Retrieve a single icon and all public properties at once. Note looping this is very slow as it uses no cache layer to ensure the latest data.

/tab
tab Response

```yaml
$ref: '#/api/model/icon'
```

/tab
/tabs