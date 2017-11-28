import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController, ActionSheetController } from 'ionic-angular';

import { CreateprofilePage } from '../../pages/createprofile/createprofile';
import { EditprofilePage } from '../../pages/editprofile/editprofile';
import { SearchPage } from '../../pages/search/search';

import { FirebaseProvider } from '../../providers/firebase';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-headerbar',
  templateUrl: 'headerbar.html'
})

export class HeaderBarComponent {

  account:any;

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              private storage: Storage,
              public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController) {
    this.storage.get('account').then((val) => {
      var comp = this;

      this.dbProv.db.list('/newusers', ref => ref.orderByChild('name').equalTo(val)).snapshotChanges().subscribe(function(users) {
        if (users.length > 0) {
          comp.setAccount(users[0].payload.val());
        }
      });
    });
  }

  setAccount(val) {
    this.account = val;
  }

  createProfile() {
    var page;
    var contents = {};
    if (this.account == undefined)
      page = CreateprofilePage;
    else {
      page = EditprofilePage
      contents = { user: this.account };
    }

    this.navCtrl.setRoot(page, contents);
  }

  goToSearch() {
    this.navCtrl.setRoot(SearchPage, {
    });
  }

  checkLogin() {
    if (this.account == undefined) {
      let actionSheet = this.actionSheetCtrl.create({
        buttons: [
         {
           text: 'Sign In',
           icon: 'log-in',
           handler: () => {
            this.signIn();
           }
         },
         {
           text: 'Sign Up',
           icon: 'create',
           handler: () => {
            this.createProfile();
           }
         },
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
           }
         }
        ]
      });

      actionSheet.present();
    } else {
      this.createProfile();
    }
  }

  signIn() {
    var comp = this;

    let alert = this.alertCtrl.create({
      title: 'Sign In',
      inputs: [
        { name: 'username', placeholder: 'Username' },
        { name: 'password', placeholder: 'Password', type: 'password' }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Login',
          handler: data => {
            if (data.username != "") {
              comp.storage.set('account', data.username).then(() => {
                comp.dbProv.db.list('/newusers', ref => ref.orderByChild('name').equalTo(data.username)).snapshotChanges().subscribe(function(users) {
                  if (users.length > 0) {
                    comp.setAccount(users[0].payload.val());
                    comp.createProfile();
                  }
                });
              });
            } else
              return false;
          }
        }
      ],
    });
    alert.present();
  }
}
