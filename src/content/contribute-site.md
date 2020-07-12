# Site & How to Contribute

Similar to the icons this site is Open Source. Years ago when the project was smaller [@templarian](https://twitter.com/templarian) built all the features, but as the community grew it is difficult to build every feature.

|             | Public Site | Admin |
|-------------|-------------|-------|
| *Language*  | TypeScript  | TypeScript |
| *Framework* | Web Components | Angular 9 |
| *CSS*      | Custom (CSS) | Bootstrap 4 (SASS) |
| *Source* | [View](https://github.com/Templarian/MaterialDesign-Site/tree/master/src/site) | [View](https://github.com/Templarian/MaterialDesign-Site/tree/master/src) |

> **Information:** Both are stored in the same repo, but the non-application logic web components are stored in a seperate repo [here](https://github.com/Templarian/MaterialDesign-Components/tree/master/src/mdi).

## Public Site

From the home page, icon pages, and documentation the public site can be edited.

### Tech Stack

- TypeScript - Fancy JavaScript
- Web Components - 

### Building a Feature

- Clone the [repo](https://github.com/Templarian/MaterialDesign-Site)
- `npm install`
- `npm run start:site`

All code relavant to the site is stored in `src/site`. Unless you need to modify a `mdi-*` Web Component. Those Web Components can be viewed [here](https://github.com/Templarian/MaterialDesign-Components).

> **Information:** icon:comment-question Why 2 repos? The `mdi-*` Web Components are published as package on NPM `@mdi/components`.

#### What Features are Wanted

To know if your feature is going to be merged into production it is highly recommended that an issue be created first for the community and contribution team to review.

#### Feature Requires New Endpoints

This is common that new features need a new endpoint, but please review the current open issues tagged `API` before requesting. The API is still closed source, but if the feature is needed the endpoint(s) can be added.

Please also read through the API documentation, many of the existing endpoints have optional parameters.

### Tips for Feature Development

- Let us know early on if your feature needs a API to work.
- Look at the existing code base and follow consistent naming.
- Use existing services where it makes sense instead of wrapping your own.
- Break up features into smaller features when possible.
- Be patient, the larger the feature the long it takes for us to review.
- VS Code `CTRL+SHIFT+P` `Format Document`

## Admin

Generally the only person making edits to the admin is the core team members, but still worth outlining below.

### Tech Stack

If you are familiar with Angular and Bootstrap the code base is hopefully pretty easy to follow.

```
/api       // Mock json files for local development
/app
- admin    // Admin Pages
- homePage
  - homePage.component.html
  - homePage.component.scss
  - homePage.component.ts
- shared
  -        // Shared components
/content
  - *.md   // Documentation and page content
```

Every page has a `.html`, `.scss`, and `.ts`. Most text is contained in Markdown files to encourage editing by as wide of an audiance as possible.

### Building a Feature

All features for the site are managed through pull requests. Clone the project in GitHub following the instructions in the readme.

<a href="https://github.com/Templarian/MaterialDesign-Site" class="button">icon:github View on GitHub</a>

## Documentation

Documentation edits and additions can be done directly in GitHub. GitHub will even create pull requests for you if you use one of the links provided on the left sidebar of any page.

<a class="button" href="https://github.com/Templarian/MaterialDesign-Site/tree/master/src/content">icon:file-multiple View all content files on GitHub</a>