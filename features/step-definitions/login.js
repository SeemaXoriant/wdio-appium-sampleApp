import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js';
import allureReporter from '@wdio/allure-reporter'

import {
    Given,
    When,
    Then
} from "@wdio/cucumber-framework";

/*
    This steps describes that user is on login page
**/

Given(/^I am on the login page$/, async () => {
    allureReporter.addDescription('Describes user is on login page');
    allureReporter.addAttachment('Step', 'User on login page.');
});

/*
    This step state that when user enters valid credentials on login page
**/

When(/^I enter username and password$/, async () => {
    allureReporter.addDescription('User entering valid user name and valid password');
    allureReporter.addAttachment('Step', 'User adding valid credentials');
    await loginPage.enterCredentials('standard_user', 'secret_sauce');
});

/*
    This step defines that user is trying to add different combination of username and password
    to login into system.
**/

When(/^I enter "(.*)" and "(.*)"$/, async (username, password) => {
    allureReporter.addDescription(`When User entering ${username} and password on login page`);
    allureReporter.addAttachment('Step', `Entering ${username} and [masked_password]`);
    await loginPage.enterCredentials(username, password);
});

/*
    This step defines that user click on login button to validate the user credentials
**/

When(/^I click on Login button$/, async () => {
    allureReporter.addDescription(`When User clicked on login Button`);
    allureReporter.addAttachment('Step', 'User clicked on login Button');
    await loginPage.clickLogin();
});

/*
    This step defines that user is able to logged into system with when 
    validate credentials is entered. After successful login user is navigated 
    to dashboard screen by cross checking if element can be discplayed from dahsboard screen 
**/

Then(/^Show message login successful.$/, async () => {
    allureReporter.addDescription('Then user successfully logged in and see dahsboard screen');
    allureReporter.addAttachment('Step', 'User successfully logged into application and navigated to dashboard page');
    const dashBoardDisplayed = await loginPage.canSeeDashboardAfterLogin();
    expect(dashBoardDisplayed).toBe(true);
});

/*
    This step defines that user should see toast message becuase of invalid credentials
**/

Then(/^I should see a flash message for loggin failed saying "(.*)"$/, async (message) => {
    const actualMessage = await loginPage.toastElement.getText();
    allureReporter.addDescription(`Then login failed, expected message is: ${message} but got message as:${actualMessage}`);
    allureReporter.addAttachment('Step', `User failed to login into app.`);
    await expect(actualMessage).toEqual(message);
});

/*
    This step defines that input fields values should be get cleared before entering new
    values in username and password field.
**/

When(/^I clear earlier values$/, async () => {
    allureReporter.addDescription('Describes clear value from username and password field');
    allureReporter.addAttachment('Step', 'Clear value from username and password field');
    await loginPage.clearAll();
});
