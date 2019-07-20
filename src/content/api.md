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
  - Look for the lock symbol in the object definitions below.

import:/content/api-get-package.md

import:/content/api-get-package-list.md

import:/content/api-get-font-versions-by-package.md

import:/content/api-get-icon.md

import:/content/api-get-icon-by-name.md

import:/content/api-get-tags.md

import:/content/api-get-users.md

import:/content/api-get-user.md

import:/content/api-get-styles.md

import:/content/api-get-base-icons.md

import:/content/api-get-icon-download.md

## Private Endpoints

While pretty much all data is open to the public most of the management related API's are restricted to collaborator and admin accounts.

import:/content/api-get-admin-modification.md

import:/content/api-post-admin-icon-rename.md

import:/content/api-post-admin-icon-description.md

import:/content/api-post-admin-icon-data.md

import:/content/api-post-admin-icon-optimize.md

import:/content/api-post-admin-icon-tag.md

import:/content/api-post-admin-icon-alias.md

import:/content/api-post-admin-icon-style.md