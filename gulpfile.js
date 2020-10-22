let gulp = require('gulp'),
  sass = require('gulp-sass'),
  cleancss = require("gulp-clean-css"),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  include = require('gulp-file-include'),
  size = require('gulp-filesize');


gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(
      cleancss({
        compatibility: "ie8",
        level: {
          1: {
            specialComments: 0,
            removeEmpty: true,
            removeWhitespace: true,
          },
          2: {
            mergeMedia: true,
            removeEmpty: true,
            removeDuplicateFontRules: true,
            removeDuplicateMediaBlocks: true,
            removeDuplicateRules: true,
            removeUnusedAtRules: true,
          },
        },
      }),
    )
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("minjs", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(size())
    .pipe(
      rename({
        suffix: ".min",
      }),
    )
    .pipe(gulp.dest("app/js"))
    .pipe(size());
});

gulp.task('html', function () {
  return gulp
    .src(['src/*.html', '!src/components/**/*.html'])
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file",
      }),
    )
    .pipe(gulp.dest("app/"))
    .pipe(browserSync.reload({ stream: true }));
});


gulp.task('js', function () {
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch(['src/*.html', 'src/components/**/*.html'], gulp.parallel('html'));
  gulp.watch('src/js/*js', gulp.parallel('js', 'minjs'));
});

gulp.task('default', gulp.parallel('sass', 'minjs', 'watch', 'browser-sync'));

