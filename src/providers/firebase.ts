import { Injectable } from '@angular/core';

import { Platform } from 'ionic-angular';

// Firebase imports`
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseProvider {
  constructor(public db: AngularFireDatabase) {
    console.log("Firebase connection");
  }
}