import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-transconfirm',
  templateUrl: 'transconfirm.html'
})
export class TransconfirmPage {

  skill:any;
  lessonInfo:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.skill = this.navParams.get('skill');
    this.lessonInfo = this.navParams.get('lessonInfo');
    console.log(this.lessonInfo);
  }
}
