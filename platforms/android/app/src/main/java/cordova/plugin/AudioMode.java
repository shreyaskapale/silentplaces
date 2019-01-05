package org.cordova.plugin;
import org.apache.cordova.*;
import org.json.JSONArray;
import android.app.Activity;
import org.json.JSONException;
import android.content.Context;
import android.media.AudioManager;
import android.os.Bundle;

public class AudioMode extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
        if (action.equals("vibrate")) {

            AudioManager am = (AudioManager) cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
            am.setRingerMode(AudioManager.RINGER_MODE_VIBRATE);
            callbackContext.success("Audio mode has been changed to vibrate");

            return true;

        }
        else if (action.equals("normal")) {

            AudioManager am = (AudioManager) cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
            am.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
            callbackContext.success("Audio mode has been changed to normal");

            return true;

        }
        else if (action.equals("silent")) {

            AudioManager am = (AudioManager) cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
            am.setRingerMode(AudioManager.RINGER_MODE_SILENT);
            callbackContext.success("Audio mode has been changed to silent");

            return true;

        }else {

            return false;

        }
    }
}
