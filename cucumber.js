module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/stepDefininitions/*.ts'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-aware' },
    publishQuiet: true,
    paths: ['features/**/*.feature'],
  }
};