// eslint-disable no-undef

/**
 * npm modules
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const ejs = require('gulp-ejs');
const extender = require('gulp-html-extend');
const htmlhint = require('gulp-htmlhint');
const htmlbeautify = require('gulp-html-beautify');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

/**
 * values
 */
const files = [
  './src/ejs/html/**/*.ejs',
  '!./src/ejs/html/**/_*.ejs',
];
const dist = './dist';
const options = require('../html-options');

/**
 * function
 */
function EJS_BUILD() {
  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(extender({ annotations: false }))
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(htmlhint(options.hint))
    .pipe(htmlhint.reporter())
    .pipe(htmlbeautify(options.beautify))
    // .pipe(htmlmin(options.minify))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(dist));
}

module.exports = EJS_BUILD;
