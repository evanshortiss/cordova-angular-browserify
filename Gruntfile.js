'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    watch: {
      files: ['www/**/*', '!www/bundle.js'],
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
            baseDir: 'www'
          }
        }
      }
    },

    browserify: {
      dist: {
        files: {
          './www/js/bundle.js': ['./www/**/*'],
        }
      }
    },

    jshint: {
      src: ['Gruntfile.js', './www/**/*.js'],
      options: {
        globals: {
          describe: true,
          it: true,
          before: true,
          beforeEach: true
        },
        curly: true,
        camelcase: false,
        evil: false,
        browser: true,
        trailing: true,
        sub: true,
        eqeqeq: false,
        eqnull: true,
        devel: false,
        smarttabs: false,
        laxbreak: false,
        laxcomma: true,
        jquery: false,
        loopfunc: true,
        indent: 2,
        bitwise: true,
        noarg: true,
        noempty: true,
        nonew: true,
        undef: true,
        boss: true,
        node: true,
        newcap: true,
        quotmark: 'single',
        unused: true,
        strict: true,
        maxparams: 5,
        maxdepth: 5,
        maxstatements: 20,
        maxcomplexity: 10
      }
    },

    lintspaces: {
      javascript: {
        src: ['./www/**/*.js', '!./www/bundle.js'],
        options: {
          // TODO: Reference editorconfig
          indentation: 'spaces',
          spaces: 2,
          newline: true,
          trailingspaces: true,
          ignores: ['js-comments']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('build', ['browserify:dist']);
  grunt.registerTask('format', ['lintspaces', 'jshint']);
  grunt.registerTask('serve', ['browserSync', 'watch']);
};
