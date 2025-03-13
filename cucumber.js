module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/stepDefininitions/*.ts'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    formatOptions: { snippetInterface: 'async-aware' },
    publishQuiet: true,
    paths: ['features/**/*.feature'],
  }
};