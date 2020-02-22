const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function Autoprefixer(done) {
    gulp.src('./style/*.css')
        .pipe(autoprefixer({
            cascade: true,
            grid: true,
            overrideBrowserslist: ['last 5 versions'],
        }))
        .pipe(gulp.dest('./style/'))
    done();
}

function GulpOn(done) {
    console.log('Gulp is on');
    done();
}

function watchAutoprefixer(done) {
    gulp.watch('./style/*.css', Autoprefixer)
    done();
}

gulp.task('default',watchAutoprefixer);