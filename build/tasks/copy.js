module.exports = function(gulp, config) {
  return {
    src: function() {
      return gulp.src('src/**/*.js')
        .pipe(gulp.dest(config.outputDir));
    }
  };
};
