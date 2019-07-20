# API Endpoints

<blockquote class="alert alert-danger">
  icon:information-outline Please do not use these endpoints to scrape the site or to build third party applications. All data is provided in the <code>meta.json</code> on the <a href="https://cdn.materialdesignicons.com/{{version}}/meta.json">CDN</a> or in the <a href="https://github.com/Templarian/MaterialDesign-SVG/blob/master/meta.json">GitHub</a> repo after every release.
</blockquote>

To help others build out features for the site all the endpoints are described below.

## Public Endpoints

Public endpoints are visible to everyone using the website.

- No Authentication
- Cached results (up to 5 minutes)
- Objects may not contain all properties (ex: user objects)
  - Look for the lock symbol in the object definitions below.

import:/content/api/get-package.md

import:/content/api/get-package-by-id.md

import:/content/api/get-icon-by-id.md

import:/content/api/get-icon-by-name.md

import:/content/api/get-tag.md

import:/content/api/get-user.md

import:/content/api/get-user-by-id.md

import:/content/api/get-style.md

import:/content/api/get-base-icons.md

import:/content/api/get-icon-download.md

## Private Endpoints

While pretty much all data is open to the public most of the management related API's are restricted to collaborator and admin accounts.

import:/content/api/get-admin-package-font.md

import:/content/api/get-admin-icon-modification.md

import:/content/api/post-admin-icon-name.md

import:/content/api/post-admin-icon-description.md

import:/content/api/post-admin-icon-data.md

import:/content/api/post-admin-icon-optimize.md

import:/content/api/post-admin-icon-tag.md

import:/content/api/post-admin-icon-alias.md

import:/content/api/post-admin-icon-style.md