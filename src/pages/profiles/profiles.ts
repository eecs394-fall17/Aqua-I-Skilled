import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { EditprofilePage } from '../editprofile/editprofile';

import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
  providers: [FirebaseProvider],
})
export class ProfilesPage {

  users:any;

  ngOnInit() {
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider) {
    dbProv.db.list("/newusers").valueChanges().subscribe(users => {
      this.users = users;
    });
  }

  goToSearch() {
    this.navCtrl.setRoot(SearchPage, {
    });
  }

  goToEditProfile(user) {
    this.navCtrl.push(EditprofilePage, {
      user: user
    });
  }
}
