/**
 * Gulp Configuration
 * 
 * File: /gulpfile.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

/* THIRD-PARTY IMPORTS */
const
  gulp = require('gulp'),
  rename = require('gulp-rename');

/* ************************************************************************* */

/* A task function for testing */
gulp.task('hello', async () => {
  return new Promise((resolve, reject) => {
    console.log('Hello, World!');
    resolve();
  });
});
