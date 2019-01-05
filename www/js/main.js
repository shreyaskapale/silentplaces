 document.addEventListener("deviceready", onDeviceReady, true);
        var  wifi = "null";

function onDeviceReady() {
        var sssid = window.localStorage.getItem("sssid");
        var sbssid = window.localStorage.getItem("sbssid");
        document.getElementById("wifi_name").innerHTML=sssid;
        document.getElementById("wifi_mac").innerHTML=sbssid;
        
  }



function getScanResults() {
    check_permission();
    var wifi = WifiWizard.getScanResults(function(wifis) {
        enabled = false;
        WifiWizard2.setWifiEnabled(enabled);
        enabled = true;
        WifiWizard2.setWifiEnabled(enabled);
       // var getwifis = wifis;
        var selected_bssid = wifis[0].BSSID;
        exp = (27.55 - (20 * Math.log10(wifis[0].frequency)) + Math.abs(wifis[0].level)) / 20.0;
        selected_distance = Math.pow(10.0, exp);
        var storage = window.localStorage;
        selected_ssid = wifis[0].SSID;
        storage.setItem("sbssid", selected_bssid);
        selected_distance = Math.round(selected_distance);
        storage.setItem("sdistance",selected_distance);
        storage.setItem("sssid", selected_ssid);
        //alert(selected_distance);
        //alert(selected_bssid);
        document.getElementById("wifi_name").innerHTML=selected_ssid;
        document.getElementById("wifi_mac").innerHTML=selected_bssid;

})
}
function check_permission(){
        var Permission = window.plugins.Permission; 
        var permission = 'android.permission.ACCESS_FINE_LOCATION'
        Permission.has(permission, function(results) {
        if (!results[permission]) {
                Permission.request(permission, function(results) {
                if (result[permission]) {
                // permission is granted
            }
        }, alert)
    }
}, alert)
}
function background_call()
{
alert("The app will be running in background mode, if didn't close automatically please press home button.")
cordova.plugins.backgroundMode.enable();
cordova.plugins.backgroundMode.moveToBackground();
cordova.plugins.backgroundMode.overrideBackButton();
window.androidVolume.setRinger(60);
main_background();  
window.setInterval(function(){
main_background();  
}, 5000);
}

function main_background(){

        var sssid = window.localStorage.getItem("sssid");
        var sbssid = window.localStorage.getItem("sbssid");
        var sdistance = window.localStorage.getItem("sdistance");


        var wifi = WifiWizard.getScanResults(function(wifis) {
        enabled = false;
        WifiWizard2.setWifiEnabled(enabled);
        enabled = true;
        WifiWizard2.setWifiEnabled(enabled);
        var found_bssid = wifis[0].BSSID;
        exp = (27.55 - (20 * Math.log10(wifis[0].frequency)) + Math.abs(wifis[0].level)) / 20.0;
        var found_distance = Math.pow(10.0, exp);
        found_distance = parseInt(Math.round(found_distance));
        sdistance = parseInt(sdistance);
        if (found_bssid.localeCompare(sbssid)===0) {
            if(found_distance===sdistance){
                        var ringerlevel = window.androidVolume.getRinger();
                        window.androidVolume.setRinger(0);
                        navigator.notification.vibrate(1500);
                        }
            else{
                        window.androidVolume.setRinger(60);

            }

        }
     

})




}