import { Platform, MenuController, Nav } from 'ionic-angular';
import { Component, ViewChild  } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SearchPage } from '../pages/search/search';
import { AddSkillPage } from '../pages/addskill/addskill';
import { TransconfirmPage } from '../pages/transconfirm/transconfirm';
import { ProfilePage } from '../pages/profile/profile';

import { firebaseConfig } from './app.firebaseEnv';
import * as firebase from "firebase";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // The page loaded on startup
  rootPage:any = SearchPage;

  // Collection of pages used in left-hand menu
  pages: Array<{title: string, component: any}>;
  // Navigation component: stack of pages user accesses
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(firebaseConfig);
    firebase.firestore();

    this.pages = [
      { title: 'Search', component: SearchPage },
      { title: 'Add Skill', component: AddSkillPage }
    ];
  }

  openPage(page) {
    // Close the left-hand menu
    this.menu.close();
    // Navigate to new page by resetting stack with this page
    this.nav.setRoot(page.component);
  }
}
