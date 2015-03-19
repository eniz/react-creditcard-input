var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'), //not gulp-browerify
  reactify = require ('reactify');

gulp.task('scripts', function(){
  var bundler = browserify('./src/ReactCreditCardInput.react.js');

  return bundler
    .bundle()
    .pipe(source('react-creditcard.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scripts']);
