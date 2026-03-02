# pwix:ui-bootstrap5

## What is it ?

A Meteor package which just includes Bootstrap5 in your application.

This prevent you to manually include each and every wanted Bootstrap5 file. Just `use` this package, and enjoy.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:ui-bootstrap5
    meteor npm install @popperjs/core bootstrap --save
```

## Usage

Nothing to do here, but do not forget to install the required NPM packages (see [below](#npm-peer-dependencies)).

Starting with v2.1, if you would need the `bootstrap` global object, you can later:

```js
    import { bootstrap } from 'meteor/pwix:ui-bootstrap5';
```

and so, maybe, if for example you would wish use Bootstrap tooltips:

```js
    const tooltipsList = [].slice.call( document.querySelectorAll( '[data-bs-toggle="tooltip"]' ));
    tooltipsList.map( function( elt ){
        return new bootstrap.Tooltip( elt );
    });
```

## Provides

The required js and css files are automatically made available on the client.

## Configuration

None at the moment.

## NPM peer dependencies

Starting with v 0.3.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 2.0.0:

```js
    '@popperjs/core': '^2.11.0',
    'bootstrap': '^5.2.0',
```

Each of these dependencies should be installed at application level:

```sh
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-ui-bootstrap5/issues).

---
P. Wieser
- Last updated on 2024, Jun. 13th
