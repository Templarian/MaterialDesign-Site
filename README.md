
**ARCHIVED:** Moved to https://github.com/Pictogrammers/Icon-Site

-----------------

# Material Design Icons - Site

The [Material Design Icons](https://materialdesignicons.com) project has been growing pretty quickly over the years and now has a large community behind it and is need of a new site.

## Tech Stack

The public site and admin use two different tech stacks.

- Public Site: TypeScript, Web Components
- Admin: TypeScript, Angular, ngAngular (Bootstrap 4)

## Running Site Locally

```
npm install

# Public Site
npm run start:site
```

The browser will launch...

## Running Admin Locally

Clone the project and install `angular-cli` globally. This will handle running the Angular project.

```
npm install angular-cli --global
npm install

# Admin Site
ng serve
```

## Goals

- Modern Browser support only (developer focused resource).
- Fully responsive design.
- Fast loading.
  - Load only required icons.
  - Minify all source.
  - Scrolling only renders SVG files in view.
- View icons by version of release.
- Separate help guides for each framework.
- Resource page
- Each icon has a unique page.
- Cleanly integrate the advanced export.
- Contributor pages editable by contributors.
- Emoji ranking on icons that may need a revision.
- Suggest an alias.
- More robust tagging of icons.

## API Endpoints

To view all the documented endpoints please open `src/content/api.md`.
