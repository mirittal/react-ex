'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', ['browser-sync', 'less', 'watch'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app-server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

// Watcher will look for changes and execute tasks
gulp.task('watch', ['browser-sync'], () => {
	gulp.watch('./public/styles/less/*.less', ['less']);
});
 

 
gulp.task('less', function () {
  return gulp.src('./public/styles/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/styles'))
    .pipe(browserSync.reload({stream:true}));
});