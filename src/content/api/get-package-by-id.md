### Get Package By Id

```text
GET api/package/:packageId
```

tabs:
tab:get-package-by-id-description Description
tab:get-package-by-id-request Request
tab:get-package-by-id-response Response
tabContent:get-package-by-id-description

Search through a package of icons.

/tabContent
tabContent:get-package-by-id-request

There are various ways to filter the icon results by appending various parameters.

```text
?search=account
?name=account,account-plus
?uuid=
?author=uuid
?author=community
```

/tabContent
tabContent:get-package-by-id-response

```yaml
$ref: '#/api/model/package'
```

/tabContent
/tabs