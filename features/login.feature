Feature: Login to Sauce Demo

  As a user, I want to log in to the Sauce Demo application
  so that I can access my inventory.

  Scenario: Successful login with valid credentials
    Given I open the Sauce Demo login page
    When I enter valid credentials
    Then I should be redirected to the products page

  Scenario: Unsuccessful login with invalid credentials
    Given I open the Sauce Demo login page
    When I enter invalid credentials
    Then I should see an error message