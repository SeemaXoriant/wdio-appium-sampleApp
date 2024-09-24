Feature: Login Functionality

  Scenario Outline: As a user, I can't login into the secure area
    Given I am on the login page
    When I clear earlier values
    When I enter "<username>" and "<password>"
    And I click on Login button
    Then I should see a flash message for loggin failed saying "<message>"

    Examples:
      | username      | password     | message                                                      |
      | adfsdfd"      | qwert243     | Username and password do not match any user in this service. |
      | standard_user | qwert243     | Username and password do not match any user in this service. |
      | sfsfs         | secret_sauce | Username and password do not match any user in this service. |
      |               | secret_sauce | Username is required                                         |
      | sffgg         |              | Password is required                                         |
      |               |              | Username is required                                         |

  Scenario: Login with correct username and password, then successful login
    Given I am on the login page
    When I enter username and password
    And I click on Login button
    Then Show message login successful.
