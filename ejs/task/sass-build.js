// eslint-disable no-undef

/**
 * npm modules
 */
const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * values
 */
const files = './src/sass/*.scss';
const dist = './dist/css';

/**
 * functions
 */
function SASS_BUILD() {
  return gulp.src(files)
    .pipe(sass({
      outputStyle: 'compressed', // compressed, expanded
    }))
    .pipe(gulp.dest(dist));
}

module.exports = SASS_BUILD;
