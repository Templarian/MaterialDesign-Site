# API Endpoints

<blockquote class="alert alert-danger">
  icon:information-outline Please do not use these endpoints to scrape the site or to build third party applications. All data is provided from the CDN through the meta.json file after every release.
</blockquote>

To help others build out features for the site all the endpoints are described below.

## Public Endpoints

Public endpoints are visible to everyone using the website.

- No Authentication
- Cached results (up to 5 minutes)
- Objects may not contain all properties (ex: user objects)

import:/content/api-get-package.md

import:/content/api-get-package-list.md

import:/content/api-get-font-versions-by-package.md

import:/content/api-get-icon.md

import:/content/api-get-icon-by-name.md

import:/content/api-get-tags.md

import:/content/api-get-users.md

import:/content/api-get-user.md

### Download Icon

There is a universal endpoint for downloading icons or collections of icons allowing for various types `png` (default), `svg`, or `vector-drawable`.

```text
POST api/download
```

| Property          | Required | Default        | Values                                |
| ------------------|----------|----------------|---------------------------------------|
| id                | `true`   |                |                                       |
| type              | `false`  | `"png"`        | `"png"`, `"jpg"`, `"svg"`, `"vector-drawable"`, `"xaml"` |
| path              | `false`  | `[]`           | `["folder", "subfolder"]`                     |
| width             | `false`  | package.width  |  |
| height            | `false`  | package.height |  |
| padding           | `false`  | `0`            |  |
| paddingTop        | `false`  | `0`            |  |
| paddingRight      | `false`  | `0`            |  |
| paddingBottom     | `false`  | `0`            |  |
| paddingLeft       | `false`  | `0`            |  |
| foreground        | `false`  | `"000000"`     |  |
| foregroundOpacity | `false`  | `1`            |  |
| background        | `false`  | `#FFFFFF`      |  |
| backgroundOpacity | `false`  | `0`            |  |
| radius            | `false`  | `0`            |  |
| borderWidth       | `false`  | `0`            |  |
| borderColor       | `false`  | `000000`       |  |
| borderOpacity     | `false`  | `0`            |  |
| borderCap         | `false`  | `"round"`      |  |
| borderArray       | `false`  | `[1]`          |  |
| margin            | `false`  | `0`            |  |
| marginTop         | `false`  | `0`            |  |
| marginRight       | `false`  | `0`            |  |
| marginBottom      | `false`  | `0`            |  |
| marginLeft        | `false`  | `0`            |  |
| gridColor         | `false`  | `#F0F0F0"`     |  |
| gridOpacity       | `false`  | `0`            |  |
| matteColor        | `false`  | `"FFFFFF"`     |  |
| matteOpacity      | `false`  | `0`            |  |

Request: [DownloadIcon](/contribute/site/api/data#downloadicon) or [DownloadIcon](/contribute/site/api/data#downloadicon)[]

Response: `*.png`, `*.jpg`, `*.svg`, `*.xaml`, `*.xml` or `*.zip`

> Note: If an array is sent the results will be returned in a `zip`. `path` is ignored for object responses.


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

