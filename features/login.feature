Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I open the Suace Demo login page
    When I enter valid credentials
    Then I should be redirected to the products page

  Scenario: Unsuccessful login with invalid credentials
    Given I open the Sauce Demo login page
    When I enter invalid credentials
    Then I should see an error message
