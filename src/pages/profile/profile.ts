import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
skill:any;

constructor(public navCtrl: NavController,
            public navParams: NavParams) {
  this.skill = this.navParams.get('skill');
  console.log(this.skill);
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
confirmTrans(result){
  this.navCtrl.push(TransconfirmPage, {
    skill: result
  });
}

}
