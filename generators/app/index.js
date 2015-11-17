var generators  = require('yeoman-generator');
var chalk       = require('chalk');
var util        = require('util');
var path        = require('path');
var mkdirp      = require('mkdirp');

module.exports = generators.Base.extend({
  prompting: {
    getDetails: function() {
      var done = this.async();
      // greet the user
      this.log(this.yeoman);
      // prompt for details
      this.prompt([{
        type    : 'input',
        name    : 'title',
        message : 'Your project title',
        default : this.appname
      },
      {
        type    : 'input',
        name    : 'description',
        message : 'A short description of your project'
      },
      {
        type    : 'list',
        name    : 'customBuild',
        message : 'Choose a Phaser build',
        choices : [
          { name: 'Arcade only (recommended)', value: 'custom/phaser-arcade-physics' },
          { name: 'P2 with Arcade (standard)', value: 'phaser'                       },
          { name: 'No Physics'               , value: 'custom/phaser-no-physics'     }
        ]
      },
      {
        type    : 'confirm',
        name    : 'proceed',
        message : 'Create project?'
      }],
      function (answers) {
        if (!answers.proceed) {
          this.env.error('Project creation aborted');
        }
        this.title        = answers.title;
        this.description  = answers.description;
        this.customBuild  = answers.customBuild;
        done();
      }.bind(this));
    }
  },

  writing: {
    setupDirectories: function() {
      this.log('Setting up directory structure...');
      // setup src director
      mkdirp.sync('src');
      this.template('src/_app.js', 'src/app.js');
      this.template('src/_index.js', 'src/index.js');

      mkdirp.sync('src/app');
      this.template('src/app/_states.js', 'src/app/states.js');

      mkdirp.sync('src/app/data');
      this.template('src/app/data/_assets.js', 'src/app/data/assets.js');

      mkdirp.sync('src/app/objects');
      this.template('src/app/objects/_SplashScreen.js', 'src/app/objects/SplashScreen.js');

      mkdirp.sync('src/app/states');
      this.template('src/app/states/_Boot.js', 'src/app/states/Boot.js');
      this.template('src/app/states/_Game.js', 'src/app/states/Game.js');
      this.template('src/app/states/_Preload.js', 'src/app/states/Preload.js');

      // setup the resources/sfx directory
      mkdirp.sync('resources/sfx');
      this.template('resources/sfx/_README.md', 'resources/sfx/README.md');

      // setup the static director
      mkdirp.sync('static/assets/img');
      mkdirp.sync('static/icons');
      this.template('static/_browserconfig.xml', 'static/browserconfig.xml');
      this.template('static/_index.html', 'static/index.html');
      this.template('static/_manifest.json', 'static/manifest.json');
      // copy over all of the images
      this.fs.copy(
        this.templatePath('static/favicon.ico'),
        this.destinationPath('static/favicon.ico')
      );
      this.fs.copy(
        this.templatePath('static/assets/img/*.png'),
        this.destinationPath('static/assets/img')
      );
      this.fs.copy(
        this.templatePath('static/icons/*.png'),
        this.destinationPath('static/icons')
      );

      // setup gulpfile.js directory
      mkdirp.sync('gulpfile.js');
      this.template('gulpfile.js/_config.js', 'gulpfile.js/config.js');
      this.template('gulpfile.js/_index.js', 'gulpfile.js/index.js');

      mkdirp.sync('gulpfile.js/tasks');
      this.fs.copy(
        this.templatePath('gulpfile.js/tasks/_dev.js'),
        this.destinationPath('gulpfile.js/tasks/dev.js')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js/tasks/_dist.js'),
        this.destinationPath('gulpfile.js/tasks/dist.js')
      );

      mkdirp.sync('gulpfile.js/tasks/helpers');
      this.template('gulpfile.js/tasks/helpers/_bundler.js', 'gulpfile.js/tasks/helpers/bundler.js');

      // setup config files
      this.template('_babelrc', '.babelrc');
      this.template('_editorconfig', '.editorconfig');
      this.template('_eslintrc', '.eslintrc');
      this.template('_gitattributes', '.gitattributes');
      this.template('_gitignore', '.gitignore');
      this.template('_package.json', 'package.json');
      this.template('README.md', 'README.md');

    }
  },

  install: function() {
    this.log('Installing dependencies...');
    this.npmInstall([''], { 'saveDev': true })
  }
});
