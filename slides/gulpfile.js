const fs = require('fs');
const gulp = require('gulp');
const connect = require('gulp-connect');
const replace = require('gulp-replace');

const SLIDES_WATCH = [
  '**/*.html',
  '**/*.js',
  '**/*.css'
];

gulp.task('connect', () => {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('build', () => {
  const slides = fs.readdirSync('src/sections')
    .map(f => fs.readFileSync(`src/sections/${f}`).toString())
    .reduce((a, b) => a + b);

  gulp.src(['src/index.html'])
    .pipe(replace('<!-- slides are to be inserted here -->', slides))
    .pipe(gulp.dest('.'));
});

gulp.task('reload', () => {
  gulp.src(SLIDES_WATCH)
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(SLIDES_WATCH, ['build', 'reload']);
});

gulp.task('default', ['connect', 'build', 'watch']);
