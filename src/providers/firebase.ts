import { Injectable } from '@angular/core';

import { Platform } from 'ionic-angular';

// Firebase imports`
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import 'firebase/storage';

@Injectable()
export class FirebaseProvider {
  constructor(public db: AngularFireDatabase,
              public app: FirebaseApp) {
    console.log("Firebase connection");
  }
}