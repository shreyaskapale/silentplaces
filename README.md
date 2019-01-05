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

>Whole source code is written javascript ES6 , plugins are written in JAVA.

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


