yo-phaser
===============

[![Build Status](https://travis-ci.org/pparke/slush-phaser-plus.svg?branch=master)](https://travis-ci.org/pparke/slush-phaser-plus)

A fork of the excellent [slush-phaser-plus](https://github.com/rblopes/slush-phaser-plus) converted to use [Yeoman](http://yeoman.io/).

Uses [Gulp](http://gulpjs.com/), [BrowserSync](http://www.browsersync.io/), [Browserify](http://browserify.org/), and [Babel](https://babeljs.io/) for development in ES6 in a live environment.

Prerequisites
-------------
* [Node.js](http://nodejs.org/) (with NPM)
* [Yeoman](http://yeoman.io/)

Installation
------------
```sh
npm install -g yo generator-yo-phaser
```

Usage
-----
Create a new directory for your project to live in, change to the directory and run the generator.

```sh
mkdir <project-name>
cd <project-name>
yo yo-phaser
```

Development
-----------
The following npm scripts are available to you, performing the tasks as described below.

```sh
npm start     # Launch a development server. Same as `gulp dev`.
npm run dist  # Prepare the game release for distribution. Also `gulp dist`.
npm run clean # Delete temporary and distribution build files.
npm test      # Run the test files contained in the test directory, supports es6 syntax
```

Sub-generators
--------------
There are four sub-generators for common tasks.

```sh
yo yo-phaser:<sub-generator>
```

* `state`   : Generates a new class extending `Phaser.State` and adds it to the imported states.
* `object`  : Allows you to select a Phaser base class to extend
* `plugin`  : Extends `Phaser.Plugin`
* `test`    : Creates a new test file for the class specified (does not yet support testing a full integration of Phaser, you must import any Phaser classes that you use)

License
-------

Source code distributed under the terms of the [MIT License](LICENSE).
