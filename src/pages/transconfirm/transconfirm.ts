import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-transconfirm',
  templateUrl: 'transconfirm.html'
})
export class TransconfirmPage {

  user:any;
  lessonInfo:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.lessonInfo = this.navParams.get('lessonInfo');
    //console.log(this.lessonInfo);
  }
}
