'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    watch: {
      files: ['./www/**/*', '!./www/js/bundle.js',
        '!./www/bower_components/**'],
      tasks: ['build'],
      options: {
        'event': ['all']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : 'www/**'
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './www'
          }
        }
      }
    },

    // TODO: Investgiate why transform fails...using grunt-shel instead for now
    // browserify: {
    //   debug: {
    //     files: {
    //       './www/js/bundle.js': ['./www/**/*.js', '!./www/js/bundle.js'],
    //     },
    //     options: {
    //       bundleOptions: {
    //         // 'debug': true,
    //         'entry': './www/js/app.js',
    //         'transform': ['brfs'],
    //       }
    //     }
    //   }
    // },

    shell: {
      'bower-install': {
        command: 'bower install'
      },
      'browserify-debug': {
        command: 'browserify ./www/js/**/*.js -t brfs -e ./www/js/app.js ' +
          '-o www/js/bundle.js -d'
      },
      'browserify-dist': {
        command: 'browserify ./www/js/**/*.js -t brfs -e ./www/js/app.js ' +
          '-o www/js/bundle.js'
      }
    },

    column_lint: {
      files: {
        src: ['./www/**/*.js', '!./www/js/bundle.js']
      }
    },

    wiredep: {
      debug: {
        src: [
          './www/index.html'
        ],

        dependencies: true,
        devDependencies: false
      }
    },

    jshint: {
      src: ['Gruntfile.js', './www/**/*.js', '!./www/js/bundle.js'],
      options: {
        jshintrc: './jshintrc.js'
      }
    },

    lintspaces: {
      javascript: {
        src: ['./www/**/*.js', '!./www/js/bundle.js'],
        options: {
          // TODO: Reference editorconfig
          indentation: 'spaces',
          spaces: 2,
          newline: true,
          trailingspaces: true,
          ignores: ['js-comments']
        }
      }
    },

    karma: {
      browsers: {
        configFile: './karma.conf.js'
      }
    },
  });


  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-column-lint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['build', 'karma']);
  grunt.registerTask('build', ['shell:bower-install', 'shell:browserify-debug',
    'wiredep:debug']);
  grunt.registerTask('format', ['lintspaces', 'jshint']);
  grunt.registerTask('serve', ['browserSync', 'watch']);
};
