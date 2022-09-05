Feature: Go to saucedemo

@smoke
Scenario: Enter in the webside

Given I am in saucedemo 
When enter a valid username and password
When click in login
Then appears in welcome page
