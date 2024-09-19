# Playwright Cucumber Saucedemo

This repository contains a sample project demonstrating how to integrate [Playwright](https://playwright.dev/) with [Cucumber](https://cucumber.io/) for end-to-end testing, using the [Sauce Demo](https://www.saucedemo.com/) application as the test subject.

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

## Running Tests

To execute the tests, use the following command:
```bash
npm test
```
or
```bash
yarn test
```

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
