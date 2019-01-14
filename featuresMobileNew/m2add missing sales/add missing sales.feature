@add missing sales
Feature: A registered user can add missing sales

   Scenario: User navigates to Add Missing Sales page
    Given user has logged in
    And user clicks on Gaugemeter on MTD Commission Card
    And user selects Month Dec under Incremental Sales
    And user clicks on Add button

    When user lands on page with title "Add Missing Sales"
    And user enters Product Name
    And user selects date
    And user selects quantity
    And user enters price
    And user enters Confirmation Number
    And user clicks on SAVE & NEW button

    Then missing sales is added with message "Record added successfully"

  
    
