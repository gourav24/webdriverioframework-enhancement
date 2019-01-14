@am_headerMenuRedirection
Feature: A registered user can open different menu and submenu
 A registerd user must be able to open press room page and all the sub menus
   @am_leadership
   Scenario: User can open the leadership sub menu
       Given user click on Company Overview 
       When user validate leadership page with text "OFFICERS & DIRECTORS"
       Then verify leadership page by validating url

   @am_companyHistory
   Scenario: User can open the Company history sub menu
       Given user click on Company Overview 
       When user validate company history page with text "Company History"
       Then verify company history page by validating url

  @am_corporateOverview
  Scenario: User can open the Company history sub menu
       Given user click on Corporate Overview 
       When user validate company history page with text "Corporate Overview"
       Then verify corporate overview page by validating url

  @am_learningCenter
  Scenario: User can open the Learning Center sub menu
       Given user click on Learning Center 
       When user validate company history page with text "Learning Center"
       Then verify learning center page by validating url

  @am_corporateResponsibility
  Scenario: User can open the Corporate Responsibility sub menu
       Given user click on LCorporate Responsibility 
       When user validate company history page with text "Corporate Responsibility"
       Then verify corporate responsibility page by validating url