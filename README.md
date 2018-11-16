[![Build Status](https://travis-ci.org/razorphish/core-geo.svg?branch=master)](https://travis-ci.org/razorphish/core-geo)
[![Coverage Status](https://coveralls.io/repos/github/razorphish/core-geo/badge.svg)](https://coveralls.io/github/razorphish/core-geo)

Geo
=========

A small library that consumes an api to retrieve GEO information from the user

## Installation

  `npm install @marasco/core-geo`

## Usage

    var numFormatter = require('@marasco/core-geo');

    var formattedNum = numFormatter(35666);
  
  
  Output should be `35,666`


## Tests

  `npm test`

## Coverage
 
  `npm cover`

## Contributing
Antonio Marasco


In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

git add .
git commit -m “Initial release”
git tag v0.1.0
git push origin master --tags

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738
This it a test

##update verion numbers

npm version patch -m "Version %s - add sweet badges"

git push && git push --tags

npm publish

npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

https://travis-ci.org/razorphish/core-geo
https://coveralls.io/repos
