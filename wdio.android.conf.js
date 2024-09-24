const androidConfig = {
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:app': process.cwd() + '/app/SauceLabs-2.7.1.apk'

        //additional capabilities can be added here

    }],
};

export default androidConfig;