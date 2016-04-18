<%= title %>
===============================================================================
<%= description %>



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
* `object`  : Allows you to select a Phaser base class to extend or just create an empty class
* `plugin`  : Extends `Phaser.Plugin`
* `test`    : Creates a new test file for the class specified (does not yet support testing a full integration of Phaser, you must import any Phaser classes that you use)

License
-------

Source code distributed under the terms of the [MIT License](LICENSE).
