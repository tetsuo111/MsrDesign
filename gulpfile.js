var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('uglify', function () {
	gulp.src('./js/common.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

gulp.task('sass', function(){
	gulp.src('css/sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('css/sass/'));
});

gulp.task('sass-watch', ['sass'], function(){
	var watcher = gulp.watch('css/sass/**/*.scss', ['sass']);
	watcher.on('change', function(event) {
	});
});