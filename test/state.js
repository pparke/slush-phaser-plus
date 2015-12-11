/**
 * Test Suite for yo-phaser state subgenerator
 */
 var helpers  = require('yeoman-generator').test;
 var assert   = require('yeoman-generator').assert;
 var path     = require('path');

 describe('yo-phaser:state', function () {
   describe('create a new state that extends Phaser.State', function () {
     before(function (done) {
       helpers.run(path.join(__dirname, '../generators/state'))
       .withPrompts({
         name: 'TestState',
         description: 'A test state',
         proceed: true
       })
       .on('end', done);
     });

     it('src/app/states/TestState.js should exist', function () {
       assert.file([ 'src/app/states/TestState.js' ]);
     });

     it('the content of the file should be as expected', function () {
       assert.fileContent('src/app/states/TestState.js', '* TestState');
       assert.fileContent('src/app/states/TestState.js', '* @extends Phaser.State');
       assert.fileContent('src/app/states/TestState.js', '* A test state');
       assert.fileContent('src/app/states/TestState.js', 'export default class TestState extends Phaser.State');
     });

   });
 });
