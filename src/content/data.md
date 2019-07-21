# Models / Enums

In alphabetical order are all the models with properties (all properties can be viewed in [GitHub](https://github.com/Templarian/MaterialDesign-Site/tree/master/src/app/shared/models)).

## Models

These are all the known models used in the site for either requests or responses. For performance reasons not all properties maybe be populated. This is especially true for deeply nested types.

### Alias

```typescript
class Alias {
    id: string,
    name: string
}
```

### DownloadIcon

```typescript
class DownloadIcon {
    id: string;
    type: DownloadType = DownloadType.Svg;
    path: string[] = [];
    width: number = 24;
    height: number = 24;
    padding: number = 0;
    paddingTop: number = 0;
    paddingRight: number = 0;
    paddingBottom: number = 0;
    paddingLeft: number = 0;
    foreground: string = "FFFFFF";
    foregroundOpacity: number = 1;
    background: string = "000000";
    backgroundOpacity: number = 1;
    radius: number = 0;
    borderWidth: number = 1;
    borderColor: string = "990000";
    borderOpacity: number = 1;
    borderCap: string = "round";
    borderArray: number[] = [];
    margin: number = 0;
    marginTop: number = 0;
    marginRight: number = 0;
    marginBottom: number = 0;
    marginLeft: number = 0;
    gridColor: string = "F0F0F0";
    gridOpacity: number = 1;
    matteColor: string = "FFFFFF";
    matteOpacity: number = 1;
}
```

### Icon

```typescript
class Icon {
    id: string;
    name: string;
    data: string;
    user: User;
    tags: Tags[];
    aliases: Alias[];
}
```

### Modification

```typescript
class Modification {
    id: string;
    modificationId: ModificationType;
    packageId: string;
    user: User;
    icon: Icon;
    iconNameBefore: string;
    iconNameAfter: string;
    iconDataBefore: string;
    iconDataAfter: string;
    text: string;
    date: Date;
    issue: number;
}
```

### Package

```typescript
class Package {
    id: string;
    name: string;
    width: number;
    height: number;
    fonts: Font[];
    icons: Icon[];
}
```

### Font

```typescript
class Font {
    id: string;
    name: string;
    description: string;
    prefix: string;
    fontName: string;
    fileName: string;
    fontFamily: string;
    fontWeight: string;
    price: number;
    versions: FontVersion[];
    iconCount: number;
    icons: Icon[];
}
```

### FontVersion

```typescript
class FontVersion {
    id: string;
    description: string;
    major: number;
    minor: number;
    patch: number;
    date: Date;
    released: boolean;
    iconCount: number;
    icons: Icon[];
}
```

### FontIcon

This is not used. It is simply a FK relationship between FontVersion and Icon.

```typescript
class FontIcon {
    id: string;
    fontId: string;
    fontVersionId: string;
    iconId: string;
    codepoint: string;
}
```

### Tag

```typescript
class Tag {
    id: string;
    name: string;
    iconCount: number;
}
```

### User

```typescript
class User {
    id: string;
    github: string;
    twitter: string;
    name: string;
    base64: string;
}
```

## Enums

Enums used in above models.

### DownloadType

`downloadType.enum.ts` [View on GitHub](https://github.com/Templarian/MaterialDesign-Site/blob/master/src/app/shared/enums/downloadType.enum.ts)

```typescript
enum DownloadType {
    Png = "png",
    Jpg = "jpg",
    Svg = "svg",
    Xaml = "xaml",
    VectorDrawable = "vector-drawable"
}
```

### ModificationType

`modificationType.enum.ts` [View on GitHub](https://github.com/Templarian/MaterialDesign-Site/blob/master/src/app/shared/enums/modificationType.enum.ts)

```typescript
enum ModificationType {
    IconAliasCreated = "691c8829-b1e7-11e7-bf5c-94188269ec50",
    IconCreated = "AFFE875E-01BC-4A34-9BE3-27625A155B28",
    IconDeleted = "B1CE1713-A18A-4E9D-9E26-D0B4E44A1FAC",
    IconModified = "1506F66B-CC2A-4575-A20A-DC138628977A",
    IconRenamed = "F7B6D49B-A86F-49AC-AF92-6B9D0DF6188B",
    IconTagCreated = "a185a9e8-c192-11e7-bf5c-94188269ec50",
    IconDescriptionModified = "3c638179-c4ca-11e8-9f27-94188269ec50",
    WebfontPublished = "66B9FA99-1FAA-4D8F-B87F-B6F3CA444624",
    News = "B4DEB3A8-A146-4086-9D7B-B67842A9CCB8"
}
```