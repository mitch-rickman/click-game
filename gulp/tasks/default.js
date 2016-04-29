var config = require('../gulp.config.js');
var gulp = require('gulp');

// bring in tasks
var sass = require('./sass');
var templates = require('./templates');
var js = require('./webpack');

var watch = require('gulp-watch');

gulp.task('default', ['build:sass', 'build:templates', 'build:js']);

gulp.task('watch', function() {
    watch(config.css.src, function() {
        gulp.start('build:sass');
    });
    watch(config.templates.src, function() {
        gulp.start('build:templates');
    });

    watch( config.js.src, function() {
        gulp.start('build:js');
    });
});
