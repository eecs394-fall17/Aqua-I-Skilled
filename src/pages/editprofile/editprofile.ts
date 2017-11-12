import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateprofilePage } from '../createprofile/createprofile';


@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }
}
