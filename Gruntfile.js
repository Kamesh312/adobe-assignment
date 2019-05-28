module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        files: {
          'menu.css': 'menu.scss'
        }
      }
    },
    uglify: {
      "presets": [
        "stage-3"
      ],
      dist: {
          files: {
              'menu.min.js': 'menu.js',
              'menu_parse.min.js': 'menu_parse.js'
          }
      }
  },
  concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['menu.min.js', 'menu_parse.min.js'],
        dest: 'menu-compressed.min.js',
      },
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register Grunt tasks
  grunt.registerTask("default", ["sass", "uglify", "concat"]);
};
