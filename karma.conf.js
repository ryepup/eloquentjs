module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/setup.js',
      'src/**/*.json',
      'src/**/*.txt',
      'src/**/*.js'
    ],
    preprocessors: {
      '**/*.json': ['json_fixtures'],
      '**/*.txt': ['html2js']
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-json-fixtures-preprocessor',
      'karma-html2js-preprocessor'
    ]
  });
};
