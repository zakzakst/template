/**
 * npm modules
 */
const browsersync = require('browser-sync').create();

/**
 * values
 */
const options = {
  server: {
    baseDir: './dist',
  },
};

/**
 * functions
 */
function START(done) {
  browsersync.init(options);
  done();
}

function RELOAD(done) {
  browsersync.reload();
  done();
}

module.exports = { START, RELOAD };
