@mlogin.neg
Feature: A registered user cannot login In-Gauge app

   Scenario: User enters incorrect username
    When user enter Username "ashlie.tibbs1"
    When user enter Password "Abcd@12345"
    Then user clicks on Login button
    Then user gets message "User has no account" 
    Then user clicks OK button on alert
    
   Scenario: User enters incorrect password
    When user enter Username "ashlie.tibbs1@hilton.com"
    When user enter Password "Abc"
    Then user clicks on Login button
    Then user gets message "Invalid Password" 
    Then user clicks OK button on alert