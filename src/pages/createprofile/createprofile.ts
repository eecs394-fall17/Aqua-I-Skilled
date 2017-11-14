import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';


@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html'
})
export class CreateprofilePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  editProfile(result) {
    this.navCtrl.push(EditprofilePage, {
          skill: result
    });
  }


}
