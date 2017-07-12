module.exports = function(grunt) {

  grunt.initConfig({
  	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    watch: {
    css: {
       files: '**/*.sass',
        tasks: ['sass'],
        options: {
            livereload: true,
            },
        },
    },

    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'js/**/*.js']
    },

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};
