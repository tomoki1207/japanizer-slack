const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');

const paths = {
  src: './scripts/',
  dist: './lib/',
  files: [
    'translator-core.js',
    'global-translator.js',
    'signin-translator.js',
    'signout-translator.js',
    'forgot-translator.js',
    'messages-translator.js',
  ],
};

gulp.task('watch', () => {
  paths.files.forEach((entry) => {
    const bundler = watchify(
      browserify({
        cache: {},
        entries: [`${paths.src}/${entry}`],
        transform: babelify.configure({ presets: ['es2015'] }),
        debug: true,
        packageCache: {},
      }));
    const bundle = () =>
      bundler
        .bundle()
        .pipe(source(entry))
        .pipe(gulp.dest(paths.dist));
    bundler.on('update', bundle);
    bundler.on('log', msg => console.log(msg));
    return bundle();
  });
});