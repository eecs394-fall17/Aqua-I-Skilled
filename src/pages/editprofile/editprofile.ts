import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateprofilePage } from '../createprofile/createprofile';


@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {

  user:any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }
}
