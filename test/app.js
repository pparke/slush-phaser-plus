/**
 * Test Suite for yo-phaser generator
 */
 var helpers  = require('yeoman-generator').test;
 var assert   = require('yeoman-generator').assert;
 var path     = require('path');

 describe('yo-phaser:app', function () {

   describe('setup directory structure and files', function () {
     before(function (done) {
       helpers.run(path.join(__dirname, '../generators/app'))
       .withPrompts({
         title: 'Test App',
         description: 'A test application',
         customBuild: 'custom/phaser-arcade-physics',
         proceed: true
       })
       .on('end', done);
     });

     it('src folder should containe necessary files', function () {
       assert.file([
         'src/app.js',
         'src/index.js',
         'src/app/states.js',
         'src/app/data/assets.js',
         'src/app/objects/SplashScreen.js',
         'src/app/states/Boot.js',
         'src/app/states/Game.js',
         'src/app/states/Preload.js'
       ]);
     });

     it('resoures folder should contain sfx/README.md', function () {
       assert.file([ 'resources/sfx/README.md' ]);
     });

     it('static folder should contain necessary files', function () {
       assert.file([
         'static/browserconfig.xml',
         'static/index.html',
         'static/manifest.json',
         'static/favicon.ico',
         'static/assets/img',
         'static/icons'
       ]);
     });

     it('gulpfile.js folder should contain necessary files', function () {
       assert.file([
         'gulpfile.js/config.js',
         'gulpfile.js/index.js',
         'gulpfile.js/tasks/dev.js',
         'gulpfile.js/tasks/dist.js',
         'gulpfile.js/tasks/helpers/bundler.js'
       ]);
     });

     it('project root folder should contain necessary files', function () {
       assert.file([
         '.babelrc',
         '.editorconfig',
         '.eslintrc',
         '.gitattributes',
         '.gitignore',
         'package.json',
         'README.md'
       ]);
     });
   });
 });
