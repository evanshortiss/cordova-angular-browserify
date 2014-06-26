'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    watch: {
      files: [
        './www_dev/**/*',
        // Don't watch deps or generated files
        '!./www_dev/js/bundle.js',
        '!./www_dev/js/bundle.css',
        '!./www_dev/bower_components/**'
      ],
      tasks: ['build:debug'],
      options: {
        'event': ['all']
      }
    },


    browserSync: {
      dev: {
        bsFiles: {
          src : 'www_dev/**'
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './www_dev'
          }
        }
      }
    },


    shell: {
      'bower-install': {
        command: 'bower install'
      },
      'browserify-debug': {
        command: 'browserify ./www_dev/js/**/*.js -e ./www_dev/js/app.js ' +
          '-o ./www_dev/bundle.js -d'
      },
      'browserify-release': {
        command: 'browserify ./www_dev/js/**/*.js -e ./www_dev/js/app.js ' +
          '-o ./www_dev/bundle.js'
      }
    },


    column_lint: {
      files: {
        src: ['./www_dev/**/*.js', '!./www_dev/js/bundle.js']
      }
    },


    dom_munger: {
      release: {
        options: {
          read: [{
            selector: 'script[src]',
            attribute: 'src',
            writeto: 'jsFiles',
            isPath: true
          }, {
            selector: 'link',
            attribute: 'href',
            writeto: 'cssFiles',
            isPath: true
          }]
        },
        src: './www_dev/index.html'
      }
    },


    wiredep: {
      all: {
        src: [
          './www_dev/index.html'
        ],

        dependencies: true,
        devDependencies: false
      }
    },


    jshint: {
      src: [
        'Gruntfile.js',
        './www_dev/**/*.js',
        '!./www_dev/bundle.js',
        '!./www_dev/bower_components/**/*.js'
      ],
      options: {
        jshintrc: './jshintrc.js'
      }
    },


    cssmin: {
      // Combine our own CSS files for debug builds
      combine: {
        files: {
          'www_dev/bundle.css': ['www_dev/css/**/*.css']
        }
      },
      minify: {
        src: [
        '<%= dom_munger.data.cssFiles %>',
          './www_dev/css/**/*.css'
        ],
        dest: 'www/bundle.css',
      }
    },


    uglify: {
      // Create release JS from script tags and browserified JS bundle
      release: {
        // mangle: true,
        options: {
          beautify: false,
          compress: true,
          mangle: false
        },
        files: {
          './www/bundle.js': '<%= dom_munger.data.jsFiles %>'
        }
      }
    },


    lintspaces: {
      javascript: {
        src: [
          './www_dev/**/*.js',
          '!./www_dev/bower_components/**/*.js',
          '!./www_dev/bundle.js'
        ],
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


    copy: {
      release: {
        files: [{
          cwd: './www_dev/',
          src: [
            // Anything you want copied to www goes here
            './img/',
            './fhconfig.json'
          ],
          dest: './www/',
          expand: true,
        }]
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
  grunt.loadNpmTasks('grunt-dom-munger');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-column-lint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Run all unit tests
  grunt.registerTask('test', ['build:debug', 'karma']);

  // Code quality checks
  grunt.registerTask('format', ['lintspaces', 'jshint', 'column_lint']);

  // Serve files and watch for changes
  grunt.registerTask('serve', ['build:debug', 'browserSync', 'watch']);

  // Build debug files for ./www
  grunt.registerTask('build:debug', [
    'shell:bower-install',
    'shell:browserify-debug',
    'wiredep:all',
    'cssmin:combine'
  ]);

  // Build release files and write to /www
  grunt.registerTask('build:release', [
    'build:debug', // Debug src needs to be configured first
    'shell:browserify-release',
    'dom_munger:release',
    'uglify:release',
    'cssmin:minify',
    'copy:release'
  ]);
};
