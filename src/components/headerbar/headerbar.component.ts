import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
              public alertCtrl: AlertController) {
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
                comp.goToSearch();
              });
            } else
              return false;
          }
        }
      ]
    });
    alert.present();
  }
}
