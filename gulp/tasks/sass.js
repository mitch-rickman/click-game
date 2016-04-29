var config = require('../gulp.config.js');
var gulp = require('gulp');

// css processors
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');

gulp.task('build:sass', function() {
    var processors = [
        autoprefixer({browsers: ["last 2 versions"]}),
        mqpacker
    ];

    return gulp.src( config.css.src )
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss(processors) )
        .pipe( gulp.dest( config.css.build ) );

});
