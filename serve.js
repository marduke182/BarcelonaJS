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

Metalsmith(__dirname)
  .source('src/')
  .destination('./build')
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
  // .use(collections({
  //   events: 'events/*.md',
  //   sortBy: 'startDate',
  //   reverse: true
  // }))
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
