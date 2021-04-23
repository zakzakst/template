/**
 * npm modules
 */
const gulp = require('gulp');

/**
 * task modules
 */
const { BROWSER_START, BROWSER_RELOAD } = require('./tasks/browser-sync');
const EJS_BUILD = require('./tasks/ejs-build');
const { SASS_BUILD, SASS_LINT } = require('./tasks/sass-build');
const WEBPACK = require('./tasks/webpack');
const IMAGE_MIN = require('./tasks/image-min');

/**
 * gulp tasks
 */
gulp.task('watchFiles', (done) => {
  gulp.watch('./src/ejs/**/*.ejs', gulp.series(EJS_BUILD, BROWSER_RELOAD));
  gulp.watch('./src/sass/**/*.scss', gulp.series(SASS_BUILD, BROWSER_RELOAD));
  gulp.watch('./src/js/**/*.js', gulp.series(WEBPACK, BROWSER_RELOAD));
  done();
});
gulp.task('default', gulp.series(BROWSER_START, 'watchFiles'));
gulp.task('build', gulp.series(EJS_BUILD, SASS_BUILD, WEBPACK));
gulp.task('sassLint', gulp.series(SASS_LINT));
gulp.task('imageMin', gulp.series(IMAGE_MIN));
