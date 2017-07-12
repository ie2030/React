'use stricts';

// dependecies

var gulp = require('gulp');
var gulp = require('gulp-pass');
var gulp = require('gulp--clean-css');
var gulp = require('gulp-uglify');
var gulp = require('gulp-rename');
var gulp = require('gulp-changed');

// SCSS//CSS//I/O SAAS Path

var SCSS_S = './src/Assets/scss/**/*.scss'; //input
var SCSS_DEST = './src/Assets/css'; //output

// Coplile SCSS

gulp.task('compile_scss', function(){

gulp.src(SCSS_SRC)
.pipe(saas().on('error', saas.logError))
.pipe(minifyCSS())
.pipe(rename({siffix: '.min'}))
.pipe(changed(SCSS_DEST))
.pipe(gulp.dest(SCSS_DEST));
});

//detect changes in SCSS

gulp.task('watch_scss', function(){
	gulp.watch(SCSS_SRC, ['compile_scss']);

});

//run task

gulp.task('default', ['watch_scss']);
