#Author: Timothy Hassan
Feature: Resource Search Functionality Test

  Background: 
    Given I am on link.springer.com

  Scenario: To search with two blank spaces
    When I type two blank spaces and press return key
    Then I the total result is equal total resource
    And close browser

  Scenario: To search with a asterisk
    When I type a with asterisk symbol and press return key
    Then I verify error message display
    And close browser
