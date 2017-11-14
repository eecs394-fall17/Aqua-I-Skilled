import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';


@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html'
})
export class CreateprofilePage {

  user:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = {
      name: "Name",
      zip: "Zip",
      gender: "Gender",
      age: "Age",
      keywords: "Skills",
      description: "Description\nExample: I am a professional chef with 25 years of experience in cooking Chinese and Thai food. I currently work at Novotei.",
      email: "Email",
      password: "Password",
    };
  }

  logForm() {
    this.navCtrl.push(EditprofilePage, {
      user: this.user
    });
  }


}
