var config = require('../gulp.config');
var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');
var webpackConfig = require('../webpack.config');

gulp.task('build:js', function() {
    return gulp.src( config.js.entry )
        .pipe( babel() )
        .pipe( webpack( webpackConfig ) )
        .pipe( gulp.dest( config.js.build ) );
});
