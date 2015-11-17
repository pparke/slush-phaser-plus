var generators  = require('yeoman-generator');
var chalk       = require('chalk');
var util        = require('util');
var path        = require('path');
var mkdirp      = require('mkdirp');
var _           = require('lodash/string');

module.exports = generators.Base.extend({
  prompting: {
    getDetails: function() {
      var done = this.async();

      this.prompt([{
        type    : 'input',
        name    : 'name',
        message : 'Enter the class name',
        validate: function (input) {
          return !(!input || typeof input !== 'string');
        },
        filter  : _.capitalize
      },
      {
        type    : 'input',
        name    : 'description',
        message : 'Describe the class (optional)',
        default : null,
        filter  : _.trim
      },
      {
        type    : 'input',
        name    : 'subdir',
        message : 'Enter the subdirectory you would like the object placed in, will be created, nested ok (optional)',
        default : null,
        filter  : _.trim
      },
      {
        type    : 'list',
        name    : 'baseClass',
        message : 'Choose a base class to extend',
        choices : [ 'Sprite', 'Group', 'Image', 'Button', 'Graphics', 'Other' ]
      },
      {
        type    : 'input',
        name    : 'baseClass',
        message : 'Enter the name of the class you wish to extend',
        when    : function (answers) {
          return answers.baseClass === 'Other';
        },
        filter  : _.capitalize
      },
      {
        type    : 'confirm',
        name    : 'proceed',
        message : 'Create class?'
      }],
      function (answers) {
        if (!answers.proceed) {
          this.env.error('Class creation aborted');
        }
        this.name         = answers.name;
        this.description  = answers.description;
        this.baseClass    = answers.baseClass;
        this.subdir       = answers.subdir;
        done();
      }.bind(this));
    }
  },

  writing: function() {
    var dir = 'src/app/objects';
    // create the sub directory if necessary
    if (this.subdir) {
      // remove leading or trailing slashes
      this.subdir = this.subdir.charAt(0) === '/' ? this.subdir.substr(1) : this.subdir;
      this.subdir = this.subdir.charAt(this.subdir.length - 1) === '/' ? this.subdir.substr(0, this.subdir.length - 1) : this.subdir;
      dir += '/' + this.subdir;
      mkdirp.sync(dir);
    }
    this.template('_object.js', dir + '/' + this.name + '.js');
  }
});
