var config = require('../gulp.config');
var gulp = require('gulp');

var jade = require('gulp-jade');

gulp.task("build:templates", function() {
    return gulp.src( config.templates.src )
        .pipe(jade())
        .pipe( gulp.dest( config.templates.build ) );
});
