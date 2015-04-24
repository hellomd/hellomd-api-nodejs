/* jslint node: true */
'use strict';

module.exports = function ConfigureGruntService(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: true
      },
      files: {
        src: ['lib/*.js', 'index.js', 'Gruntfile.js']
      }
    }
  });

  grunt.registerTask('default', ['jshint']);
};