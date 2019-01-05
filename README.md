# Silent Places
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)  

Silent Places a cordova based mobile application, which automatically gets silent in zones selected as silent by the users.

# Principle / idea

  - Scans Wireless networks
  - Saves BSSID of the Host
  - Calculates distance between the phone and host (router)

# Formula 

    distance = 10 ^ ((27.55 - (20 * log10(frequency)) + signalLevel)/20)


# Technologies
- Apache Cordova 
  - plugins
     - wifiwizard
     - wifiwizard2
     - android-volume
     - permissions
     - backgronud-mode
     - background-service

>Story : It was the second day of my College life, apparently my professor had told everyone the day before to switch off their phone's >before entering his class... But guess what my phone rang ! So I hope you can imagine the rest of story, well I was angry that day not on >professor but on my phone ? I bought a smart phone and it cannot go auto silent in classes ? How smart is that :3 , So my brain said " how >about you make a app son " ... After thinking for some time got a idea ! To use BSSID (Mac address of college wifi) and Calculate the >distance between my class and wifi.So a app that would run in the background and when ever you are in the class at that distance range your >phone gets silent automatically and when you are out of the class it goes back to normal mode. 

# Building source for android
requirements - 
 -cordova : - https://cordova.apache.org/
 -above mentioned plugins : - https://cordova.apache.org/docs/en/latest/guide/cli/
 -AndroidSDK
 -Gradle
 -ADB_drivers

 
 Go to the cloned directory , then on cordova console...
 
    cordova plateform add android 
    
    cordova run android

or 

    cordova build android

# Note
As the application is still in prototype stage all devices might not be supported, there may bugs too.

License
----

MIT ( Revised with addition )


