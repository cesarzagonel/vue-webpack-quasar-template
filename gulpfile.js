var gulp = require('gulp');
var manifest = require('gulp-manifest');

gulp.task('manifest', function() {
    gulp.src(['bundle/*'], {base: './'})
        .pipe(manifest({
            hash: true,
            filename: 'app.manifest'
        }))
        .pipe(gulp.dest('./'));
});
