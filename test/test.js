/**
 * Test Suite for yo-phaser test subgenerator
 */
 var helpers  = require('yeoman-generator').test;
 var assert   = require('yeoman-generator').assert;
 var path     = require('path');

 describe('yo-phaser:test', function() {
   describe('create a new test suite', function() {
     before(function(done) {
       helpers.run(path.join(__dirname, '../generators/test'))
       .withPrompts({
         name: 'TestClass',
         path: 'src/app/sprites/player/',
         description: 'A test for the TestClass',
         proceed: true
       })
       .on('end', done);
     });

     it('test/TestClass.js should exist', function() {
       assert.file(['test/TestClass.js']);
     });

     it('the content of the file should be as expected', function() {
       assert.fileContent('test/TestClass.js', '* TestClass Test');
       assert.fileContent('test/TestClass.js', "import TestClass from '../src/app/sprites/player/TestClass.js';");
       assert.fileContent('test/TestClass.js', '* A test for the TestClass');
       assert.fileContent('test/TestClass.js', "describe('A test for the TestClass', function() {");
       assert.fileContent('test/TestClass.js', 'instance = new TestClass();');
     });
   });
 });
