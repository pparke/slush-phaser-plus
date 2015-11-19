/**
 * Test Suite for yo-phaser plugin subgenerator
 */
 var helpers  = require('yeoman-generator').test;
 var assert   = require('yeoman-generator').assert;
 var path     = require('path');

 describe('yo-phaser:plugin', function() {
   describe('create a new plugin that extends Phaser.Plugin', function() {
     before(function(done) {
       helpers.run(path.join(__dirname, '../generators/plugin'))
       .withPrompts({
         name: 'TestPlugin',
         description: 'A test plugin',
         proceed: true
       })
       .on('end', done);
     });

     it('src/app/states/TestPlugin.js should exist', function() {
       assert.file(['src/app/plugins/TestPlugin.js']);
     });

     it('the content of the file should be as expected', function() {
       assert.fileContent('src/app/plugins/TestPlugin.js', '* TestPlugin');
       assert.fileContent('src/app/plugins/TestPlugin.js', '* @extends Phaser.Plugin');
       assert.fileContent('src/app/plugins/TestPlugin.js', '* A test plugin');
       assert.fileContent('src/app/plugins/TestPlugin.js', 'class TestPlugin extends Phaser.Plugin');
       assert.fileContent('src/app/plugins/TestPlugin.js', 'export default TestPlugin;');
     });
   });
 });
