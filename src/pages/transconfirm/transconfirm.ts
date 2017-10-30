import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-transconfirm',
  templateUrl: 'transconfirm.html'
})
export class TransconfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.giver = this.navParams.get('giver');
    this.skill = this.navParams.get('skill');
    this.num_stars = this.navParams.get('num_stars');
    this.dist = this.navParams.get('dist');
  }

}
