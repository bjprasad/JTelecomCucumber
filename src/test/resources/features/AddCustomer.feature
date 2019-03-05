#Author: greens
Feature: To test the add customer functionlaity

  Background: 
    Given The user is in telecom home pag

  Scenario: To test the submit button1
    And The user navigates to add customer page
    When The user fill in the form details
      | fname  | lname  | email           | adress  | phnum     |
      | testf  | testl  | test4@gmail.com | chennai | 123456789 |
      | testxf | testxl | test1@gmail.com | chennai | 223456789 |
      | testyf | testyl | test2@gmail.com | chennai | 323456789 |
      | testzf | testzl | test3@gmail.com | chennai | 423456789 |
    And The user submits the form
    Then The customer should see the customer id generated.

  Scenario: To test the submit button2
    And The user navigates to add customer page
    When The user fill in the form details
      | fname  | lname  | email           | adress  | phnum     |
      | testf  | testl  | test4@gmail.com | chennai | 123456789 |
      | testxf | testxl | test1@gmail.com | chennai | 223456789 |
      | testyf | testyl | test2@gmail.com | chennai | 323456789 |
      | testzf | testzl | test3@gmail.com | chennai | 423456789 |
    And The user submits the form
    Then The customer should see the customer id generated.

  Scenario: To test the submit button2
    And The user navigates to add customer page
    When The user fill in the form details
      | fname  | lname  | email           | adress  | phnum     |
      | testf  | testl  | test4@gmail.com | chennai | 123456789 |
      | testxf | testxl | test1@gmail.com | chennai | 223456789 |
      | testyf | testyl | test2@gmail.com | chennai | 323456789 |
      | testzf | testzl | test3@gmail.com | chennai | 423456789 |
    And The user submits the form
    Then The customer should see the customer id generated.
