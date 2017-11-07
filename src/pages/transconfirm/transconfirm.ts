import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddPhotoPage } from '../../pages/addphoto/addphoto';

@Component({
  selector: 'page-transconfirm',
  templateUrl: 'transconfirm.html'
})
export class TransconfirmPage {

  skill:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.skill = this.navParams.get('skill');
    console.log(this.skill);
  }
  
  addNewPhoto() {
    this.navCtrl.push(AddPhotoPage);
  }
}
