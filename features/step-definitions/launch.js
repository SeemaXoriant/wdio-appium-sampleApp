import { Given, Then, When } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter'

/*
    This gives inital state of the app, assuming app is installed.
**/
Given(/^the app is installed$/, async () => {
    // This will automatically launch the app as specified in the desired capabilities.
    allureReporter.addDescription('Describes the app is is installed');
    allureReporter.addAttachment('Step', 'App is installed');

    const isAppInstalled = await driver.isAppInstalled('com.swaglabsmobileapp');
    expect(isAppInstalled).toBe(true);
});

/*
    When user launches the app
**/

When(/^user launches the app$/, async () => {
    allureReporter.addDescription('Describes app is launched');
    await driver.activateApp('com.swaglabsmobileapp');
});

/*
    User should see login screen
**/

Then(/^the login page should be displayed$/, async () => {
    allureReporter.addDescription('Describes splash screen will disappear');
    allureReporter.addAttachment('Step', 'Spalsh screen is automatically disappeared after 5 seconds');
    // Check if login page is displayed by accessing one of element from login page
    const loginScreenElement = await $('~test-Login');
    const isDisplayed = await loginScreenElement.isDisplayed();

    // expect assertion to verify the app is displayed
    expect(isDisplayed).toBe(true);
});
