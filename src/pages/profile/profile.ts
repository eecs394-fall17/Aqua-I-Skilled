import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user:any;

  staticLessons:any;
  lessonTime:any;

  // Used for accordion dropdown
  openHolder:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.user = this.navParams.get('user');
    this.openHolder = 0;
    this.lessonTime = 0;
    var placeString = this.user["name"];
    var placeVar = placeString + "'s Place";

    this.staticLessons = [
      { "time":"8:00pm", date:"Tue Nov 7", "place": placeVar },
      { "time":"3:00pm", date:"Thu Nov 9", "place": placeVar },
    ]
  }

  // temporary button that takes you to the transConfirm page
  confirmTrans(user){
    this.navCtrl.push(TransconfirmPage, {
      user: user,
      lessonInfo: this.staticLessons[this.lessonTime],
    });
  }

  toggleLessonRadio(ind) {
    this.lessonTime = ind;
  }

  toggleAccordion(ind) {
    if (this.openHolder != ind)
      this.openHolder = ind;
    else
      this.openHolder = (ind + 1) % 2;
  }

}
