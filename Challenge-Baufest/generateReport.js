const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "STAGING",
    "Browser": "Chrome  91.0.4472.124",
    "Platform": "Mac OS Sonoma 14.5",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);