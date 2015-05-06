module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/setup.js',
      'src/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
    ]
  });
};
