// eslint-disable no-undef

/**
 * npm modules
 */
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

/**
 * values
 */
const files = [
  './src/ejs/html/**/*.ejs',
  '!./src/ejs/html/**/_*.ejs',
];
const dist = './dist';

/**
 * function
 */
function EJS_BUILD() {
  return gulp
    .src(files)
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(dist));
}

module.exports = EJS_BUILD;
