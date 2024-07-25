@addUser
Feature: Add User Tests

Background: Admin page
  Given User goes to Admin page

Scenario: Add user successfully
  When user selects the User Role "<UserRole>"
    And user fills in the Employee Name field with "<EmployeeName>"
    And user selects the Status "<Status>"
    And user fills in the Username field with "<Username>"
    And user fills in the Password field with "<Password>"
    And user fills in the Confirm Password field with "<Password>"
    And user clicks the Save button
    Then new user is added successfully

Examples:
  | UserRole    | EmployeeName | Username  | Password   | Status       |
  | <FakeRole>  | <FakeName>   | <FakeUser>| <FakePass> | <FakeStatus> |