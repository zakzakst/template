/**
 * npm modules
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const ejs = require('gulp-ejs');
const extender = require('gulp-html-extend');
const htmlhint = require('gulp-htmlhint');
const htmlbeautify = require('gulp-html-beautify');
const minifyInline = require('gulp-minify-inline');
const minifyInlineJSON = require('gulp-minify-inline-json');
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

/**
 * values
 */
const files = ['./src/ejs/html/**/*.ejs', '!./src/ejs/html/**/_*.ejs'];
const dist = './dist';
const environment = process.env.NODE_ENV || 'development';
const environmentData = require(`../env.${environment}.js`);
const htmlminOptions = {
  collapseWhitespace: true,
  removeComments: true,
};

/**
 * functions
 */
function EJS_BUILD() {
  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(extender({ annotations: false }))
    .pipe(ejs(environmentData, {}, { ext: '.html' }))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(htmlbeautify())
    .pipe(minifyInline())
    .pipe(minifyInlineJSON())
    .pipe(gulpIf(environment === 'production', htmlmin(htmlminOptions)))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(dist));
}

module.exports = EJS_BUILD;
