/**
 * Test Suite for yo-phaser object subgenerator
 */
 var helpers  = require('yeoman-generator').test;
 var assert   = require('yeoman-generator').assert;
 var path     = require('path');

 describe('yo-phaser:object', function () {

   describe('create a new class that extends Phaser.Sprite', function () {
     before(function (done) {
       helpers.run(path.join(__dirname, '../generators/object'))
       .withPrompts({
         name: 'TestClass',
         description: 'A test class',
         subdir: null,
         baseClass: 'Sprite',
         proceed: true
       })
       .on('end', done);
     });

     it('src/app/objects/TestClass.js should exist', function () {
       assert.file([ 'src/app/objects/TestClass.js' ]);
     });

     it('the content of the file should be as expected', function () {
       assert.fileContent('src/app/objects/TestClass.js', '* TestClass');
       assert.fileContent('src/app/objects/TestClass.js', '* @extends Phaser.Sprite');
       assert.fileContent('src/app/objects/TestClass.js', '* A test class');
       assert.fileContent('src/app/objects/TestClass.js', 'class TestClass extends Phaser.Sprite');
       assert.fileContent('src/app/objects/TestClass.js', 'export default TestClass;');
     });
   });

   describe('create a new class that that extends nothing and exists in a subdirectory', function () {
     before(function (done) {
       helpers.run(path.join(__dirname, '../generators/object'))
       .withPrompts({
         name: 'TestClass',
         description: 'A test class',
         subdir: '/sprites/player/',
         baseClass: 'None',
         proceed: true
       })
       .on('end', done);
     });

     it('src/app/objects/sprites/player/TestClass.js should exist', function () {
       assert.file([ 'src/app/objects/sprites/player/TestClass.js' ]);
     });

     it('the content of the file should be as expected', function () {
       assert.fileContent(  'src/app/objects/sprites/player/TestClass.js', '* TestClass');
       assert.fileContent(  'src/app/objects/sprites/player/TestClass.js', '* A test class');
       assert.fileContent(  'src/app/objects/sprites/player/TestClass.js', 'class TestClass');
       assert.fileContent(  'src/app/objects/sprites/player/TestClass.js', 'export default TestClass;');
       assert.noFileContent('src/app/objects/sprites/player/TestClass.js', 'extends Phaser.Sprite');
       assert.noFileContent('src/app/objects/sprites/player/TestClass.js', '* @extends Phaser.Sprite');
       assert.noFileContent('src/app/objects/sprites/player/TestClass.js', 'super(game, ... args)');
     });
   });
 });
