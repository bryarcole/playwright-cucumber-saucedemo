Feature: Login Functionality
  As a user
  I want to be able to log in to the Sauce Demo website
  So that I can access the products page

  Scenario: Successful login with valid credentials
    Given I open the Sauce Demo login page
    When I enter valid credentials
    Then I should be redirected to the products page

  Scenario: Failed login with invalid credentials
    Given I open the Sauce Demo login page
    When I enter invalid credentials
    Then I should see an error message
