var gulp = require('gulp');
var svgmin = require('gulp-svgmin');


gulp.task('build', function() {
    return gulp.src('icons/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('../dist'));
})

gulp.task('watch', function () {
    gulp.watch('icons/*.svg', ['build']);
});

gulp.task('default', ['build', 'watch']);
