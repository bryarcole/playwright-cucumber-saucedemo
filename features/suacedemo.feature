Feature: SauceDemo Login

  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I login with valid credentials
    Then I should be redirected to the inventory page

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the SauceDemo login page
    When I login with invalid credentials
    Then I should see an error message

  Scenario: Add items to the cart and complete checkout
    Given I am on the SauceDemo login page
    When I login with valid credentials
    And I add several items to the cart
    And I proceed to checkout
    And I fill in my details as "John", "Doe", "12345"
    Then I should see the order confirmation page