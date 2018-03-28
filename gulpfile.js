var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

//CSSファイル、javascriptファイルをミニマイズしてくれます。
gulp.task('uglify', function () {
	gulp.src('./js/common.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

//sassのコンパイルを可能にします。
gulp.task('sass', function(){
	gulp.src('css/sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
		browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
		cascade: false
	}))
		.pipe(gulp.dest('css/sass/'));
});

//sassファイルを監視してくれます。
gulp.task('sass-watch', ['sass'], function(){
	var watcher = gulp.watch('css/sass/**/*.scss', ['sass']);
	watcher.on('change', function(event) {
	});
});


