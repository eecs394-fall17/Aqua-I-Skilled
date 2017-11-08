import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  skill:any;

  // Used for accordion dropdown
  openHolder:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    
    this.skill = this.navParams.get('skill');
    this.openHolder = 1;
  }

  // trying to implement toggle
  toggleDetails(skills) {
      if (skills.showDetails) {
      skills.showDetails = false;
      skills.icon = 'ios-add-circle-outline';
    } else {
      skills.showDetails = true;
      skills.icon = 'ios-remove-circle-outline';
    }
  }

  // temporary button that takes you to the transConfirm page
  confirmTrans(skill){
    this.navCtrl.push(TransconfirmPage, {
      skill: skill
    });
  }

  toggleAccordion(ind) {
    this.openHolder = ind;
  }

}
