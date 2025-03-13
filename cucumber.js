module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: [
            'tests/cucumber/stepDefinitions/*.ts'
        ],
        format: [
            'progress-bar',
            'html:reports/cucumber-report.html',
            'json:reports/cucumber-report.json'
        ],
        formatOptions: { snippetInterface: 'async-aware' },
        paths: [
            'tests/cucumber/features/**/*.feature'
        ]
    }
}; 