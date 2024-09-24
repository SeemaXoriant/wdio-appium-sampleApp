import sharedConfig from './wdio.shared.conf.js';

// Get platform from command (e.g., npx wdio android)
const platform = process.argv[3]; // This will be 'android', 'ios', or 'web'

console.log("platform :", platform);

let platformConfig;

// Dynamically import the appropriate platform config
try {
    platformConfig = await import(`./wdio.${platform}.conf.js`);
    console.log("platform config:", platformConfig);
} catch (error) {
    console.error(`Error loading config for platform: ${platform}`);
    process.exit(1);
}

// Merge platform-specific config with the base config
export const config = {
    ...sharedConfig,
    ...platformConfig.default
};
