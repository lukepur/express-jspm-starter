# Express + JSPM boilerplate

A no-frills boilerplate to get started quickly with an Express.js
web application using JSPM for client app JavaScript management.

## Getting started
1. `npm install && jspm install`
2. `npm start`

## Adding client-side libraries/frameworks
Install with JSPM and then import as per ES2015 import - e.g.

`import _ from 'lodash';`

or

`import React, {Component} from 'react';`

The entry point to the client app is `client/js/main.js`.
