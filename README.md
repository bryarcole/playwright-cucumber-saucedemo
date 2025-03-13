# Playwright Cucumber Sauce Demo

This project demonstrates two different approaches to automated testing using Playwright:

## Test Architecture

### 1. Playwright Native Tests (`/tests/playwright/`)
- Uses Playwright's native test runner
- Traditional unit test style
- Direct access to Playwright's API
- Run with: `npm run test:playwright`

Example:
```typescript
test.describe('Login Functionality', () => {
  test('Successful login', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    // ... more test steps
  });
});
```

### 2. Cucumber BDD Tests (`/tests/cucumber/`)
- Uses Cucumber for Behavior Driven Development
- Business-readable feature files
- Step definitions in TypeScript
- Run with: `npm test`

Example:
```gherkin
Feature: Login Functionality
  Scenario: Successful login
    Given I open the Sauce Demo login page
    When I enter valid credentials
    Then I should be redirected to the products page
```

## Running Tests

### Playwright Tests
```bash
# Run all Playwright tests
npm run test:playwright

# Run only UI tests
npm run test:playwright:browser

# Run only API tests
npm run test:playwright:api

# Run with UI mode
npm run test:playwright:ui
```

### Cucumber Tests
```bash
# Run all Cucumber tests
npm test

# Run only API tests
npm run test:cucumber:api
```

## Project Structure
```
tests/
├── playwright/           # Playwright native tests
│   └── login.spec.ts
└── cucumber/            # Cucumber BDD tests
    ├── features/        # Feature files
    │   └── login.feature
    └── stepDefinitions/ # Step definitions
        └── login.steps.ts
```

## Features

- **Playwright**: Provides browser automation capabilities.
- **Cucumber**: Supports behavior-driven development (BDD) with Gherkin syntax.
- **Sauce Demo**: A sample e-commerce application for testing.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bryarcole/playwright-cucumber-saucedemo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-cucumber-saucedemo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Configuration

- **Sauce Demo Credentials**: Update the `sauceDemoConfig.json` file with your Sauce Demo credentials if needed.

## Test Structure

- **Features**: Located in the `features` directory, where you can find `.feature` files written in Gherkin syntax.
- **Step Definitions**: Located in the `step-definitions` directory, which contain the implementation of the steps defined in the feature files.
- **Support Files**: Located in the `support` directory, containing configuration files for Playwright and Cucumber.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/bryarcole/playwright-cucumber-saucedemo).

---

Feel free to adjust any details or add more specific instructions based on your needs!
