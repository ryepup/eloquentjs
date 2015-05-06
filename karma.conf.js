module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/setup.js',
      'src/**/*.json',
      'src/**/*.js'
    ],
    preprocessors: {
      '**/*.json': ['json_fixtures']
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-json-fixtures-preprocessor'
    ],

    jsonFixturesPreprocessor: {
      stripPrefix: 'src/'
    }
  });
};
