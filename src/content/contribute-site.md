# Site & How to Contribute

Similar to the icons this site is Open Source. Years ago when the project was smaller [@templarian](https://twitter.com/templarian) built all the features, but as the community grew it is difficult to build every feature.

## Tech Stack

If you are familiar with Angular and Bootstrap the process is pretty straight forward.

## Building a Feature

All features for the site are managed through pull requests. Clone the project in GitHub following the instructions in the readme.

### What Features are Wanted

To know if your feature is going to be merged into production it is highly recommended that an issue be created first for the community and contribution team to review.

### Feature Requires New Endpoints

This is common that new features need a new endpoint, but please review the current open issues tagged `API` before requesting. The API is still closed source, but if the feature is needed the endpoint(s) can be added.

Please also read through the API documentation, many of the existing endpoints have optional parameters.

## Tips for Feature Development

- Let us know early on if your feature needs a API to work.
- Look at the existing code base and follow consistent naming.
- Use existing services where it makse sense instead of wrapping your own.
- Break up features into smaller features when possible.
- Be patient, the larger the feature the long it takes for us to review.
- VS Code `CTRL+SHIFT+P` `Format Document`