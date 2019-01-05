cordova.define("cordova-plugin-audio-mode.audio_mode", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    change_audio_mode: function (audio_mode_name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AudioMode", audio_mode_name, ['','']);
    }
};

});
