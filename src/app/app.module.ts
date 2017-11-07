import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { AddSkillPage } from '../pages/addskill/addskill';
import { TransconfirmPage } from '../pages/transconfirm/transconfirm';
import { AddPhotoPage } from '../pages/addphoto/addphoto'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pipes
import { CapWord } from '../pipes/capWord';

// Providers
import { FirebaseProvider } from '../providers/firebase';
import { SearchProvider } from '../providers/search';

// Firebase config
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyDaZhd6nxDurrvCNuAJpIrn52jCSckY17c",
  authDomain: "i-skilled.firebaseapp.com",
  databaseURL: "https://i-skilled.firebaseio.com",
  projectId: "i-skilled",
  storageBucket: "i-skilled.appspot.com",
  messagingSenderId: "224698285796"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    TransconfirmPage,
    AddSkillPage,
    AddPhotoPage,
    CapWord,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'iskilled'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransconfirmPage,
    SearchPage,
    AddSkillPage,
    AddPhotoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    SearchProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
