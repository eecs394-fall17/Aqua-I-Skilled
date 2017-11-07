import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { Camera } from '@ionic-native/camera';

import { FirebaseProvider } from '../../providers/firebase';
import { PhotoSettings } from '../../settings/photosettings';

import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'page-addphoto',
  templateUrl: 'addphoto.html',
  providers: [FirebaseProvider],
})
export class AddPhotoPage {
  
  skills:any;
  skill:any;

  postTitle: any;
  desc: any;
  imageChosen: any = 0;
  imagePath: any;
  imageNewPath: any;

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              public actionSheet: ActionSheetController,
              private loadingCtrl: LoadingController) {
    this.skills = dbProv.db.list("skills");
    this.skill = {}
  }

  uploadData() {
    var ref = this.dbProv.app.storage().ref();

    console.log('Creating file');
    var file = new File([""], "../../data/greyBox.png");
    console.log('Created file: ');
    console.log(file);
    ref.put(file).then(function(snapshot) {
      console.log('Uploaded the file!');
    });
  }

  uploadPhoto() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    let filename = this.imagePath.split('/').pop();
    let options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "image/jpg",
      params: { 'title': this.postTitle, 'description': this.desc }
    };


    const fileTransfer = new Transfer();

    fileTransfer.upload(this.imageNewPath, PhotoSettings.API_UPLOAD_ENDPOINT,
      options).then((entry) => {
        this.imagePath = '';
        this.imageChosen = 0;
        loader.dismiss();
        this.navCtrl.setRoot(SearchPage);
      }, (err) => {
        alert(JSON.stringify(err));
      });
  }

  chooseImage() {

    let actionSheet = this.actionSheet.create({
      title: 'Choose Picture Source',
      buttons: [
        {
          text: 'Gallery',
          icon: 'albums',
          handler: () => {
            this.actionHandler(1);
          }
        },
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.actionHandler(2);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }


  //}
  actionHandler(selection: any) {
    var options: any;

    if (selection == 1) {
      options = {
        quality: 75,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      };
    } else {
      options = {
        quality: 75,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      };
    }

    Camera.getPicture(options).then((imgUrl) => {

      var sourceDirectory = imgUrl.substring(0, imgUrl.lastIndexOf('/') + 1);
      var sourceFileName = imgUrl.substring(imgUrl.lastIndexOf('/') + 1, imgUrl.length);
      sourceFileName = sourceFileName.split('?').shift();
      File.copyFile(sourceDirectory, sourceFileName, cordova.file.externalApplicationStorageDirectory, sourceFileName).then((result: any) => {
        this.imagePath = imgUrl;
        this.imageChosen = 1;
        this.imageNewPath = result.nativeURL;

      }, (err) => {
        alert(JSON.stringify(err));
      })

    }, (err) => {
      alert(JSON.stringify(err))
    });

  }
  
}
