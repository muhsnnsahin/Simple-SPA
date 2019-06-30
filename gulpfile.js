var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8080,
        livereload: true
    });
});

gulp.task('scss-concat', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle-index.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('js-concat', function () {
    return gulp.src('./js/*.js')
        .pipe(concat('bundle-index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('reload-html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['reload-html']);
});

gulp.task('run', ['connect', 'scss-concat', 'js-concat', 'watch']);