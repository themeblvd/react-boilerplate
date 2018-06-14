const browserSync = require('browser-sync');
const historyFallback = require('connect-history-api-fallback');

/*
 * Starts up a development server to serve the
 * /public directory using browsersync.
 *
 * Usage: `npm run server` or `npm run start`
 */
browserSync({
  files: './public/*',
  watch: true,
  server: {
    baseDir: './public',
    middleware: [historyFallback()] // Important! Allows react router to work properly.
  }
});
