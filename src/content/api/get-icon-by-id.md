### Get Icon by Id

```text
GET api/icon/:iconId
```

tabs:
tab:get-icon-by-id-description Description
tab:get-icon-by-id-response Response
tabContent:get-icon-by-id-description

Retrieve a single icon and all public properties at once. Note looping this is very slow as it uses no cache layer to ensure the latest data.

/tabContent
tabContent:get-icon-by-id-response

```yaml
$ref: '#/api/model/icon'
```

/tabContent
/tabs