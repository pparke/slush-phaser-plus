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
        message : 'Enter the name of the file you wish to test',
        validate: function (input) {
          return !(!input || typeof input !== 'string');
        },
        // make sure we have just the name and not the full filename
        filter  : function (input) {
          input = input.trim();
          if (input.substr(input.length - 3) === '.js') {
            return input.substr(0, input.length - 3);
          }
          else {
            return input;
          }
        }
      },
      {
        type    : 'input',
        name    : 'path',
        message : 'Enter the path to the file to test (starting from the project directory)',
        validate: function (input) {
          return !(!input || typeof input !== 'string');
        },
        // make sure the path is terminated with a slash
        filter  : function (input) {
          input = input.trim();
          if (input.charAt(input.length - 1) !== '/') {
            return input + '/';
          }
          else {
            return input;
          }
        }
      },
      {
        type    : 'input',
        name    : 'description',
        message : 'Describe the test suite (optional)',
        default : null,
        filter  : _.trim
      },
      {
        type    : 'confirm',
        name    : 'proceed',
        message : 'Create test?'
      } ],
      function (answers) {
        if (!answers.proceed) {
          this.env.error('Class creation aborted');
        }
        this.name         = answers.name;
        this.path         = answers.path;
        this.description  = answers.description;
        done();
      }.bind(this));
    }
  },

  writing: function () {
    if (!this.fs.exists(this.path + this.name)) {
      this.log('File %s%s does not exist yet, please make sure to create it before running the test', this.path, this.name);
    }
    this.log('Creating test file test/%s.js', this.name);
    var dir = 'test';
    this.template('_test.js', 'test/' + this.name + '.js');
  }
});
