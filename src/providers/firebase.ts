import { Injectable } from '@angular/core';

import { Platform } from 'ionic-angular';

// Firebase imports`
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import * as firebase from "firebase";
import 'firebase/firestore';
import {AngularFirestore} from "angularfire2/firestore";

import {User} from "../models/user"

@Injectable()
export class FirebaseProvider {

  fst:any;

  constructor(public db: AngularFireDatabase, public afs: AngularFirestore) {
    this.fst = firebase.firestore(); 
  }

  /*getCollection(typ, name) {
    return this.afs.collection<typ>(name);
  }*/

  addTo(collection, record) {
    record.id = this.afs.createId();
    collection.add(record.toObj());
    return record;
  }

  addImage(image64) {
    var imgStrings = image64.split(',');
    var img = imgStrings[imgStrings.length - 1];

    var ref = firebase.storage().ref('images/testImage.jpg');
    ref.putString(img, 'base64', { contentType: 'image/jpg' }).then(res => {
      console.log(res);
      console.log(res.downloadURL);
    })
  }
}