# API Endpoints

To help others build out features for the site all the endpoints are described below.

> Please do not use these endpoints to scrape the site or to build third party applications. All data is provided from the CDN through the meta.json file after every release.

## Public Endpoints

Public endpoints are visible to everyone using the website.

- No Authentication
- Cached results (up to 5 minutes)
- Objects may not contain all properties (ex: user objects)

### Get List of Packages

```text
GET api/packages
```

```text
[
    // Reference api/package/{packageId}
]
```

### Get Icon List in Package

```text
GET api/package/{packageId}
```

```json
{
    "id": "38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",
    "name": "Material Design Icons",
    "width": 24,
    "height": 24,
    "versions": [
        { "id": "", "minor": 1, "major": 7, "patch": 12, "count": 42 }
    ],
    "icons": [
        
    ]
}
```

#### Get Package Version List

```text
GET api/package/{packageId}/version
```

```json
[
    { "id": "", "minor": 1, "major": 7, "patch": 22, "count": 42 }
]
```

#### Get Icon from Package by Name

Icon names are unique across a package.

```text
GET api/package/{packageId}/{iconName}
```

```json
{
    "id": "9B295DCA-8352-407E-84F1-34890975D010",
    "name": "format-align-center",
    "description": "Align Center",
    "data": "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z",
    "date": "2015-04-23T18:25:43.511Z",
    "package": {
        "id": "38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",
        "name": "Material Design Icons",
        "version": {
            "major": 1,
            "minor": 8,
            "patch": 36
        },
        "width": 24,
        "height": 24
    },
    "user": {
        "name": "Google",
        "twitter": "Google"
    },
    "comments": [],
    "tags":[
        {
            "id":"430DA3F8-27C4-4F76-A7B7-A430E1C13AD2",
            "text":"format"
        }
    ]
}
```

### Download Icon

There is a universal endpoint for downloading icons or collections of icons allowing for various types `png` (default), `svg`, or `vector-drawable`.

If the array contains more than one item the download will be in an archived `zip`.

```text
POST api/package/{packageId}/{iconId}/download
```


| Property          | Required | Default        | Values                                |
| ------------------|----------|----------------|---------------------------------------|
| id                | `true`   |                |                                       |
| type              | `false`  | `"png"`        | `"png"`, `"svg"`, `"vector-drawable"`, `"xaml"` |
| path              | `false`  | `[]`           | `["sub", "main"]`                     |
| width             | `false`  | package.width  |  |
| height            | `false`  | package.height |  |
| padding           | `false`  | `0`            |  |
| paddingTop        | `false`  | `0`            |  |
| paddingRight      | `false`  | `0`            |  |
| paddingBottom     | `false`  | `0`            |  |
| paddingLeft       | `false`  | `0`            |  |
| foreground        | `false`  | `"#000000"`    |  |
| foregroundOpacity | `false`  | `1`            |  |
| background        | `false`  | `#FFFFFF`      |  |
| backgroundOpacity | `false`  | `0`            |  |
| radius            | `false`  | `0`            |  |
| borderWidth       | `false`  | `0`            |  |
| borderColor       | `false`  | `#000000`      |  |
| borderOpacity     | `false`  | `0`            |  |
| borderCap         | `false`  | `"round"`      |  |
| borderArray       | `false`  | `[1]`          |  |
| margin            | `false`  | `0`            |  |
| marginTop         | `false`  | `0`            |  |
| marginRight       | `false`  | `0`            |  |
| marginBottom      | `false`  | `0`            |  |
| marginLeft        | `false`  | `0`            |  |
| gridColor         | `false`  | `"#F0F0F0"`    |  |
| gridOpacity       | `false`  | `0`            |  |
| matteColor        | `false`  | `"#FFFFFF"`    |  |
| matteOpacity      | `false`  | `0`            |  |

```json
[{
    "id": "",
    "type": "png",
    "path": [],
    "width": 24,
    "height": 24,
    "padding": 10,
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10,
    "foreground": "#FFFFFF",
    "foregroundOpacity": 1,
    "background": "#000000",
    "backgroundOpacity": 1,
    "radius": 10,
    "borderWidth": 1,
    "borderColor": "#990000",
    "borderOpacity": 1,
    "borderCap": "round",
    "borderArray": [4, 4],
    "margin": 10,
    "marginTop": 10,
    "marginRight": 10,
    "marginBottom": 10,
    "marginLeft": 10,
    "gridColor": "#F0F0F0",
    "gridOpacity": 1,
    "matteColor": "#FFFFFF",
    "matteOpacity": 1
}]
```

### Get Contributors

```text
GET api/contributors
```

```json
[
    {

    }
]
```

### Get Contributor

```text
GET api/contributor/{contributorId}
```

```json
{

}
```

### Get Contributor Photo

A contributors photo can be retrieved as a `100x100` image.

```text
GET api/contributor/{contributorId}/photo
```

### Get Tags

A list of tags used to group icons in the system. If count is 0 the item will not be returned.

```text
GET api/tag
```

```json
[
    {
        "id": "{uuid}",
        "text": "Medical",
        "count": 42
    }
]
```

### Get Related Icons

```text
GET api/icon/{iconId}/related
```

## Private Endpoints

While pretty much all data is open to the public most of the management related API's are restricted to collaborator accounts.

### Get Tags

This endpoint returns all tags, even tags with no associated icons.

```text
GET api/admin/tag
```

```json
[
    {
        "id": "{uuid}",
        "text": "Medical",
        "count": 42
    },
    ...
]
```

### Post Tags

Each tag should be labeled with oppropriate naming. Alpha and spaces only (`/^[a-zA-Z ]{3,}$/`).

```text
POST api/admin/tag
```

```json
{
    "text": "Tag Name"
}
```

