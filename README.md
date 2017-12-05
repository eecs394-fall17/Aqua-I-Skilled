# I-Skilled
I-skilled allows users to learn and/or teach different skills to others in their community. Skills may range from how to change oil to cooking, to languages - anything you desire.

## FIREBASE
1. Create a Firebase Realtime Database. 
Instructions can be found at https://firebase.google.com/docs/database/web/start

## OTHER DEPENDENCIES
 
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

Using Ionic View
Make an account on Ionic at http://ionicframework.com/ , and create an app
1. Install the latest Ionic CLI
```
npm install ionic@latest
```
2. Connect your app to the Ionic website
```
ionic start --pro-id [####] 
cd [Your_App_Name]
```
3. Push your code to the Ionic Website Dashboard
```
git push ionic master
```
4. Add your own external repository as the default origin
```
git remote add origin [Your_repository_URL]
git push --set-upstream origin master
```
To test your app or have other users test your app on your phone, download 'Ionic View-Test Ionic Apps' on phone to test app on your phone
Provide other users with the public id assined on your ionic website dashboard to view the app. 


## PLATFORM CONSTRAINTS

## BUGS
- header bar overlaps on some phones
- pictures may be slow to load from database
- search bar does not cover entire width of screen

## UNFINISHED WORK
- Managing requested lessons for giver and receiver. 
- Reviewing a user after a lesson occurs
- Search based on proximity to user and other fields


