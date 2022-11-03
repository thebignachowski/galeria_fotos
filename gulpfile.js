const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')

function css ( done ) {

    src('src/scss/app.scss')
        .pipe( sass({ outputStyle: 'compressed' }) )
        .pipe( postcss([ autoprefixer() ]) )
        .pipe( dest('build/css/') )

    done();
}

function imagenes() {
    return src('src/img/**/*.jpg')
        .pipe ( dest( 'build/img' ));
}

function dev () {
    watch( 'src/scss/**/*.scss', css);
    watch( 'src/img/**/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.default = series( imagenes, css, dev );
