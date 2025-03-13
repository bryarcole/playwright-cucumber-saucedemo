module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/stepDefininitions/*.ts'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
    paths: ['features/**/*.feature'],
  }
};