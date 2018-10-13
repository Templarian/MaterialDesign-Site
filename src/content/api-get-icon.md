### Get Icon by Id

> **Warning:** Do not use in generation of lists.
>
> **Cache:**  None

```text
GET api/icon/{iconId}
```

```yaml
id: uuid
packageId: uuid
name: string
description: string
data: string svg path data
user:
  name: string
  twitter: string
- aliases:
  id: uuid
  name: string
- tags:
  id: uuid
  name: string
  url: string
- fonts:
  codepoint: string F000
  version:
    major: integer
    minor: integer
    patch: integer
  font:
    id: uuid
    name: string
    description: string
```