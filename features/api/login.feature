Feature: Login API Functionality

  Scenario: Successful login with valid credentials
    Given I have valid credentials
    When I send a POST request to login
    Then I should receive a successful response
    And the response should contain an access token

  Scenario: Unsuccessful login with invalid credentials
    Given I have invalid credentials
    When I send a POST request to login
    Then I should receive an error response
    And the error message should be "Invalid credentials" 