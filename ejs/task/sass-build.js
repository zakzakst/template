// eslint-disable no-undef

/**
 * npm modules
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const packageImporter = require('node-sass-package-importer');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');

/**
 * values
 */
const files = './src/sass/style.scss';
const dist = './dist/css';

/**
 * functions
 */
function SASS_BUILD() {
  return gulp.src(files)
    .pipe(plumber())
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css'],
      }),
      outputStyle: 'expanded', // compressed, expanded
    }))
    .pipe(postcss([
      autoprefixer(),
      stylelint(),
    ]))
    .pipe(gulp.dest(dist));
}

module.exports = SASS_BUILD;
