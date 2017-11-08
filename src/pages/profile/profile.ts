import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  skill:any;

  staticLessons:any;
  lessonTime:any;

  // Used for accordion dropdown
  openHolder:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.skill = this.navParams.get('skill');
    this.openHolder = 1;
    var placeString = this.skill["name"];
    var placeVar = placeString + "'s Place";

    this.staticLessons = [
      { "time":"8:00pm", date:"Tue Nov 7", "place": placeVar },
      { "time":"3:00pm", date:"Thu Nov 9", "place": placeVar },
    ]
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
    if (this.openHolder != ind)
      this.openHolder = ind;
    else
      this.openHolder = (ind + 1) % 2;
  }

}
