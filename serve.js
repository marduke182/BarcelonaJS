var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');
var browserSync = require('metalsmith-browser-sync');
var helpers = require('diy-handlebars-helpers');
var metadata = require('metalsmith-metadata');
var sass = require('metalsmith-sass');

var loadMetadata = require('read-metadata').sync;

/**
 * Normalize an `options` dictionary.
 *
 * @param {Object} options
 */

function normalize(options) {
  options = options || {};

  for (var key in options) {
    var val = options[key];
    if ('string' === typeof val) {
      options[key] = {
        pattern: val
      };
    }
  }
  return options;
}

var bcnjs = function bcnjs(opts) {
  opts = normalize(opts);
  var keys = Object.keys(opts);

  return function(files, metalsmith, done) {
    // setImmediate(done);
    Object.keys(files).forEach(function(file) {
      if (file.indexOf('mytest')>-1) {
        var data = files[file];
        console.log(data);
        // console.log(new Buffer(data.contents).toString('utf8'));
        // if (data.draft) delete files[file];
      }
    });
  };
};

Metalsmith(__dirname)
  .source('src/')
  .destination('./build')
  .use(bcnjs({
    event: 'test'
  }))
  .use(metadata({
    'chapters': 'data/chapters.json',
    'sponsors': 'data/sponsors.json',
    'members': 'data/members.json'
  }))
  .use(collections({
    talks: {
      pattern: 'talks/*.md',
      sortBy: 'startDate',
      reverse: true
    }
  }))
  .use(collections({
    events: {
      pattern: 'events/*.md',
      sortBy: 'startDate',
      reverse: true
    }
  }))
  .use(permalinks({
    pattern: ':title'
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: 'src/layouts',
    partials: 'src/partials'
  }))
  .use(sass({
    outputStyle: 'expanded',
    outputDir: 'assets/css/'
  }))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(browserSync({
    server: './build',
    files: ['src/**/*.*']
  }))
  .build(function(error) {
    if (error) {
      console.log(error);
    }
  });
