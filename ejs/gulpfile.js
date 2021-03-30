/* eslint-disable no-undef */
const gulp = require('gulp');

const { imagemin } = require('./task/imagemin');

gulp.task('imagemin', gulp.series(imagemin));
