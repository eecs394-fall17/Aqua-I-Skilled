# I-Skilled

## DESCRIPTION

## DEPENDENCIES
1. Create a Firebase Realtime Database. 
Instructions can be found at https://firebase.google.com/docs/database/web/start
2. Updating Cordova Android
```
 cordova platform update android@6.3.0
 ````


## INSTALLATION
Clone the repo
Install Ionic
```
npm install -g cordova ionic
```
Within the cloned project directory, run
```
npm install
```
Install firebase
```
 npm install firebase angularfire2 --save
 ```
## BUILD & DEPLOY
In the browser
```
sudo npm install -g ionic cordova
```
```
ionic serve 
```
On an Android phone
```
 ionic cordova platform add [android, ios]
```
```
 ionic cordova run [android, ios]
```

On an iOS phone
1. install Xcode 
2. go into your local project directory, and run a production build of your app
```
ionic cordova build ios
```
3. Open the .xcodeproj file in platforms/ios/ in Xcode
4. Connect your phone via USB and select it as the run target
5. Click the play button in Xcode to try to run your app


## PLATFORM CONSTRAINTS

## KNOWN BUGS
