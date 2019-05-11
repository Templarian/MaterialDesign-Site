# First Party Developer Guide

<div class="alert alert-info">
  icon:information-outline First party only differs from third party in who is publishing and the members updating. If a <a href="/contributors">core member</a> of MDI is involved in the mainance we consider it be first party.
</div>

## NPM

Only packages published under the [@mdi][org] organization are considered first party.

### Steps for Publishing

```bash
git pull
# (optional) Update Dependencies
npm update
# (optional) Build
npm run build
# update package.json
# - "version": "1.0.0"
# + "version": "1.0.1"
git status
git add .
git commit -m "v1.0.1"
git tag -a v1.0.1 -m "v1.0.1"
git push
git push origin --tags
# Verify on GitHub then...
npm publish
```

## Other

> Right now all first party packages are published through GitHub and NPM.

[org]: https://www.npmjs.com/org/mdi