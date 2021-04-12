/**
 * npm modules
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sassGlob = require('gulp-sass-glob');
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
const lintFiles = [
  './src/sass/**/*.{css,scss}',
  '!./src/sass/**/_*.{css,scss}',
  '!./src/sass/style.scss',
];

/**
 * functions
 */
function BUILD() {
  return gulp.src(files)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css'],
      }),
      outputStyle: 'expanded', // compressed, expanded
    }))
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest(dist));
}

function LINT() {
  return gulp.src(lintFiles)
    .pipe(plumber())
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css'],
      }),
    }))
    .pipe(postcss([
      stylelint(),
    ]));
}

module.exports = { BUILD, LINT };
