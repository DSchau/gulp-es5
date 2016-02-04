var babel = require('gulp-babel');

module.exports = function(gulp, config) {
  return function() {
    return gulp.src(config.src.js)
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(gulp.dest(config.outputDir));
  };
};
