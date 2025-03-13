import reporter from 'cucumber-html-reporter';

interface ReporterOptions {
    theme: 'bootstrap' | 'hierarchy' | 'foundation' | 'simple';
    jsonFile: string;
    output: string;
    reportSuiteAsScenarios: boolean;
    scenarioTimestamp: boolean;
    launchReport: boolean;
    metadata: {
        [key: string]: string;
    };
}

const options: ReporterOptions = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "QA",
        "Browser": process.env.BROWSER || "Chrome",
        "Platform": "Web",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options); 