// eslint-disable no-undef

/**
 * npm modules
 */
const gulp = require('gulp');

/**
 * task modules
 */
const IMAGE_MIN = require('./task/image-min');
const EJS_BUILD = require('./task/ejs-build');
const SASS_BUILD = require('./task/sass-build');

/**
 * gulp tasks
 */
gulp.task('imageMin', gulp.series(IMAGE_MIN));
gulp.task('ejsBuild', gulp.series(EJS_BUILD));
gulp.task('sassBuild', gulp.series(SASS_BUILD));
