yo-phaser
===============

A fork of the excellent [slush-phaser-plus](https://github.com/rblopes/slush-phaser-plus) converted to use [Yeoman](http://yeoman.io/).

Uses [Gulp](http://gulpjs.com/), [BrowserSync](http://www.browsersync.io/), [Browserify](http://browserify.org/), and [Babel](https://babeljs.io/) to development in ES6 in a live environment.

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
yo phaser-plus
```

Sub-generators
--------------
There are three sub-generators for common tasks.

```sh
yo yo-phaser:<sub-generator>
```

* `state`   : Generates a new class extending `Phaser.State` and adds it to the imported states.
* `object`  : Allows you to select a Phaser base class to extend
* `plugin`  : Extends `Phaser.Plugin`

License
-------

Source code distributed under the terms of the [MIT License](LICENSE).
