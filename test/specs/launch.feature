Feature: Launch Functionality

  Scenario: User launches the application
    Given the app is installed
    When user launches the app
    Then the login page should be displayed
