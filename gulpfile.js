var gulp = require('gulp');
var requireDir = require('require-dir');

var buildConfig = require('./build/config');

var tasks = requireDir('build/tasks');

var args = [gulp, buildConfig];

for ( const taskName in tasks ) {
  const task = tasks[taskName];
  if ( typeof task === 'function' ) {
    tasks[taskName] = task(...args);
  } else if ( typeof task.default === 'function' ) {
    tasks[taskName] = task.default(...args);
  }
}

gulp.task('babel', tasks.babel);
gulp.task('copy:src', tasks.copy.src);

gulp.task('copy', ['copy:src']);

gulp.task('default', ['copy', 'babel']);
