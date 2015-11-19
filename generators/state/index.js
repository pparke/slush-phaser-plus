var generators  = require('yeoman-generator');
var chalk       = require('chalk');
var util        = require('util');
var path        = require('path');
var mkdirp      = require('mkdirp');
var _           = require('lodash/string');

module.exports = generators.Base.extend({
  prompting: {
    getDetails: function () {
      var done = this.async();

      this.prompt([ {
        type    : 'input',
        name    : 'name',
        message : 'Enter the state name',
        validate: function (input) {
          return !(!input || typeof input !== 'string');
        },
        filter  : _.capitalize
      },
      {
        type    : 'input',
        name    : 'description',
        message : 'Describe the state (optional)',
        default : null,
        filter  : _.trim
      },
      {
        type    : 'confirm',
        name    : 'proceed',
        message : 'Create state?'
      } ],
      function (answers) {
        if (!answers.proceed) {
          this.env.error('Class creation aborted');
        }
        this.name         = answers.name;
        this.description  = answers.description;
        this.subdir       = answers.subdir;
        done();
      }.bind(this));
    }
  },

  writing: function () {
    var dir = 'src/app/states/';
    this.template('_state.js', dir + this.name + '.js');

    // append the new state to the states.js module
    try {
      var statesPath = this.destinationRoot() + '/src/app/states.js';
      var states = this.fs.read(statesPath);
      states += '\nexport { default as " + this.name + "    } from \'./states/" + this.name + "\';';
      this.log('Appending new state to states.js');
      this.fs.write(statesPath, states);
    }
    catch (e) {
      this.log('Could not read states file, new state will not be automatically appended and you must do this yourself');
    }
  }
});
