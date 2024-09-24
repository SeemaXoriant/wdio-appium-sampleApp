# wdio-appium-sampleApp
Application to demonstrate Mobile Automation using WebdriverIO and appium
It uses Allure framework for test reprot generation.

Prerequisites :
1. Node.js 
2. WebdriverIO : WebdriverIO is a progressive automation framework built to automate modern web and mobile applications.
3. Appium : Appium is an open-source automation tool designed for testing mobile applications across different platforms, including iOS, Android, and Windows.

npm install -g appium

4. Cucumber : Cucumber is a tool that supports Behaviour-Driven Development(BDD). It allows to write test cases in natural language which can be easily understandable by anyone.
               Cucumber uses a Gherkin language to define test cases.
6. Visual Studio Code

To use this application please follow below steps:
1. Navigate to folder where you want to clone this repository.
2. Git clone : https://github.com/SeemaXoriant/wdio-appium-sampleApp.git
3. cd wdio-appium-sampleApp
4. npm install : this will install all the dependancies which is mentioned in package.json
5. There are different configuration files inside this project:
    wdio.conf.js : This will combine shared and platform specific   configurations at run time based on which platform you pass through command line
    wdio.shared.conf.js : common configurations of Webdriverio
    wdio.android.conf.js : Android platform specific configuration (capabilities)
    wdio.ios.conf.js : iOS platform specific configuration 
6. run below command to run for android platform :
    npm run wdio:android
7. To generate report using allure :
    npm run allure:generate
8. To open allure report:
    np run allure:open 
    This will open the test report on browser.


Project Structure:
test\specs/: Contains Cucumber feature files that describe the scenarios.
features\step-definitions/: Contains step definitions for the Cucumber scenarios.
features\pageobjects : contains classes that represents pages of application 
wdio.conf.js: Based on argument passed for platform combine shared  configuration and platform specific configuration for WebdriverIO
wdio.android.conf.js : Android platform specific configuration file
wdio.ios.config.js : iOS platform specific configuration file
wdio.shared.conf.js : Common configuration file for WebdriverIO
package.json: Contains project dependencies and scripts.
