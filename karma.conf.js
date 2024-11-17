// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

//
// If you want to run local tests on the Edge browser uncomment the
// line below. (Don't forget to comment out again when you're done)
//

// process.env.CHROME_BIN = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/the-garbage-game'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    restartOnFileChange: false,
    singleRun: true
  });
};
