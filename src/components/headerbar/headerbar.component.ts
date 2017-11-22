import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CreateprofilePage } from '../../pages/createprofile/createprofile';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'page-headerbar',
  templateUrl: 'headerbar.html'
})

export class HeaderBarComponent {

  constructor(public navCtrl: NavController) {
  }

  createProfile() {
    this.navCtrl.setRoot(CreateprofilePage, {
    });
  }

  goToSearch() {
    this.navCtrl.setRoot(SearchPage, {
    });
  }
}