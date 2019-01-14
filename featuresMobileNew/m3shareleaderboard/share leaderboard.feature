@share leaderboard
Feature: A registered user can share leaderboard

   Scenario: User navigates to leaderboard
    Given user has logged in
    Then user scrolls to Leaderboard
    And user clicks on Share symbol

    When user lands on Share Leaderboard page with title "Share Leaderboard"
    And user enters Share Your Report description
    
    And user selects Share with tenant
    And user verifies message "Note: This feed will be shared with all users of this tenant."
    
    And user selects Share with locations
    And user verifies message "Note: This feed will be shared with all users of the selected location(s)."
    And user selects location

    And user selects Share with location group
    And user verifies message "Note: This feed will be shared with all users of the selected group(s)."
    And user selects location
    And user selects group

    And user selects Share with a colleague 
    And user verifies message "Note: This feed will be shared with all users of the selected group(s)."
    And user enters Username under Share with a colleague
    And user clicks on Share button

  
    
