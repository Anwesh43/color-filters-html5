const gulp = require('gulp')
const browserify = require('browserify')
gulp.task('compileES6',()=>{
    browserify('index.js').transform('babelify',{presets:['react','es2015']}).bundle().pipe(require('fs').createWriteStream('public/bundle.js'))
})
