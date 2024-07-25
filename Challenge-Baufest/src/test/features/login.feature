@login
Feature: User Authentication Tests

Background: Login page
Given User goes to the webpage

Scenario: User with correct credentials
When User enters "<USERNAME>" and "<PASSWORD>"
Then User is logged in

Examples:
        |   USERNAME      |   PASSWORD |
        |   Admin         |   admin123 |

Scenario: User with incorrect credentials
When User enters wrong credentials "<USERNAME>" and "<PASSWORD>"
Then User is not logged in

Examples:
        |   USERNAME      |   PASSWORD |
        |   Test1         |   admin777 |

