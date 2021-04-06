// eslint-disable no-undef

/**
 * npm modules
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

/**
 * values
 */
const files = './src/img/**/*.{jpg,jpeg,png,gif,svg}';
const dist = './dist/img';

/**
 * functions
 */
function IMAGE_MIN() {
  return gulp
    .src(files)
    .pipe(
      imagemin([
        pngquant({ quality: [ 0.65, 0.8 ], speed: 1 }),
        mozjpeg({ quality: 80 }),
        imagemin.svgo(),
        imagemin.gifsicle(),
      ])
    )
    .pipe(gulp.dest(dist));
}

module.exports = IMAGE_MIN;
