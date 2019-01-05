# Cordova Audio Mode Plugin

Simple plugin that will change your audio mode. You can change your audio mode to vibrate, silent or normal. 

## Using
Add plugin to your cordova based project

    $ cordova plugin add cordova-plugin-audio-mode


using this plugin is so simple just add the following code inside `onDeviceReady`

```js
    //this is success callback function
    var success = function(message) {
        alert(message);  
    }
    
    //this is failure callback function
    var failure = function() {
        alert("something goes wrong");
    }

    audio_mode.change_audio_mode("vibrate", success, failure); //instead of 'vibrate' other values can 'normal' or 'silent'
```

Install Android platform

    cordova platform add android
    
Run the code

    cordova run 

## this plugin is only working in android platform
