# API Endpoints

To help others build out features for the site all the endpoints are described below.

> Please do not use these endpoints to scrape the site or to build third party applications. All data is provided from the CDN through the meta.json file.

## Get List of Packages

```
api/packages
```

```
[
    // Reference api/package/{packageId}
]
```

## Get Icon List in Package

```
api/package/{packageId}
```

```json
{
    "id": "38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",
    "name": "Material Design Icons",
    "width": 24,
    "height": 24,
    "versions": [

    ],
    "icons": [

    ]
}
```

## Get Icon from Package by Name

Icon names are unique across a package.

```
api/package/{packageId}/{iconName}
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

## Download Icon

There is a universal endpoint for downloading icons or collections of icons allowing for various types `png` (default), `svg`, or `vector-drawable`.

If the array contains more than one item the download will be in an archived `zip`.

```
api/package/{packageId}/{iconId}/download
```

```
[{
    "id": "",                 // required
    "type": "png",            // required
    "path": [],               // default: []
    "width": 24,              // default: package.width
    "height": 24,             // default: package.height
    "padding": 10,            // default: 0
    "paddingTop": 10,         // default: 0
    "paddingRight": 10,       // default: 0
    "paddingBottom": 10,      // default: 0
    "paddingLeft": 10,        // default: 0
    "foreground": "#FFFFFF",
    "foregroundOpacity": 1,
    "background": "#000000",
    "backgroundOpacity": 1,
    "radius": 10,
    "borderWidth": 1,
    "borderColor": "#990000",
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

## Get Contributors

```
api/contributors
```

## Get Contributor

```
api/contributor/{contributorId}
```

## Get Contributor Photo

```
api/contributor/{contributorId}/photo
```