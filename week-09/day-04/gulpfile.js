var gulp = require('gulp');
var gulpBrowser = require('gulp-browser');
var gulpRename = require('gulp-rename');
var gulpJsmin = require('gulp-jsmin');
var gulpSass = require('gulp-sass');

gulp.task('default', ['bundle-javascript', 'sass', 'watch']);

gulp.task('bundle-javascript', function () {
 gulp.src('./source/main.js')
 	 .pipe(gulpBrowser.browserify())
 	 // .pipe(gulpJsmin())
 	 .pipe(gulpRename('build.js'))
 	 .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
	gulp.src('./source/sass/main.scss')
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function () {
	gulp.watch('./source/main.js', ['bundle-javascript']);
	gulp.watch('./source/sass/main.scss', ['sass']);
});
