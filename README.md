## How to use I-Skilled 

# In the browser
$ sudo npm install -g ionic cordova

$ ionic serve 

# On a phone
$ ionic cordova platform add [android, ios]

$ ionic cordova run [android, ios]

# Plugins

# Firebase
$ npm install firebase angularfire2 --save

# Camera and File Transfer
$ ionic cordova plugin add cordova-plugin-file --save
$ ionic cordova plugin add cordova-plugin-file-transfer --save
$ ionic cordova plugin add cordova-plugin-camera --save
$ npm install @ionic-native/camera --save
$ npm install @ionic-native/transfer --save
$ npm install @ionic-native/file --save