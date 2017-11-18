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
import { ProfilePage } from '../pages/profile/profile';
import { CreateprofilePage } from '../pages/createprofile/createprofile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ProfilesPage } from '../pages/profiles/profiles';

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
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { firebaseConfig } from './app.firebaseEnv';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    AddSkillPage,
    TransconfirmPage,
    CreateprofilePage,
    EditprofilePage,
    ProfilePage,
    ProfilesPage,
    CapWord,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'iskilled'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransconfirmPage,
    CreateprofilePage,
    EditprofilePage,
    ProfilePage,
    ProfilesPage,
    SearchPage,
    AddSkillPage,
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
