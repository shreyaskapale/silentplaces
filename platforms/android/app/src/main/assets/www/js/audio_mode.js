/*global cordova, module*/

module.exports = {
    change_audio_mode: function (audio_mode_name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AudioMode", audio_mode_name, ['','']);
    }
};
