exports.config = {
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'ios_simulator',
        'appium:platformVersion': '15.0', // Adjust to the iOS version you're targeting
        'appium:deviceName': 'iPhone 12', // Specify the device name or simulator
        'appium:automationName': 'XCUITest', // Use XCUITest for iOS
        'appium:app': process.cwd() + '<path to .app/ .ipa file>'
        //additional capabilities can be added here
    }],
}