cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.pylonproducts.wifiwizard.WifiWizard",
    "file": "plugins/com.pylonproducts.wifiwizard/www/WifiWizard.js",
    "pluginId": "com.pylonproducts.wifiwizard",
    "clobbers": [
      "window.WifiWizard"
    ]
  },
  {
    "id": "cordova-plugin-audio-mode.audio_mode",
    "file": "plugins/cordova-plugin-audio-mode/www/audio_mode.js",
    "pluginId": "cordova-plugin-audio-mode",
    "clobbers": [
      "audio_mode"
    ]
  },
  {
    "id": "cordova-plugin-permission.Permission",
    "file": "plugins/cordova-plugin-permission/www/index.js",
    "pluginId": "cordova-plugin-permission",
    "clobbers": [
      "window.plugins.Permission"
    ]
  },
  {
    "id": "cordova-plugin-permission.tests",
    "file": "plugins/cordova-plugin-permission/tests/index.spec.js",
    "pluginId": "cordova-plugin-permission"
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "wifiwizard2.WifiWizard2",
    "file": "plugins/wifiwizard2/www/WifiWizard2.js",
    "pluginId": "wifiwizard2",
    "clobbers": [
      "window.WifiWizard2"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  },
  {
    "id": "cordova-plugin-background-fetch.BackgroundFetch",
    "file": "plugins/cordova-plugin-background-fetch/www/BackgroundFetch.js",
    "pluginId": "cordova-plugin-background-fetch",
    "clobbers": [
      "window.BackgroundFetch"
    ]
  },
  {
    "id": "cordova-plugin-background-service.BackgroundService",
    "file": "plugins/cordova-plugin-background-service/www/BackgroundService.js",
    "pluginId": "cordova-plugin-background-service",
    "clobbers": [
      "BackgroundService"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-android-volume.AndroidVolume",
    "file": "plugins/cordova-plugin-android-volume/www/AndroidVolume.js",
    "pluginId": "cordova-plugin-android-volume",
    "clobbers": [
      "androidVolume"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.pylonproducts.wifiwizard": "0.2.11",
  "cordova-plugin-audio-mode": "1.1.1",
  "cordova-plugin-permission": "0.1.0",
  "es6-promise-plugin": "4.1.0",
  "wifiwizard2": "3.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-background-mode": "0.7.2",
  "cordova-plugin-background-fetch": "5.4.1",
  "cordova-plugin-background-service": "1.3.5",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-android-volume": "0.0.12"
};
// BOTTOM OF METADATA
});