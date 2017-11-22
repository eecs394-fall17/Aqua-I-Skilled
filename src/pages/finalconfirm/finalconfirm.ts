import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';

@Component({
  selector: 'page-finalconfirm',
  templateUrl: 'finalconfirm.html'
})
export class FinalconfirmPage {

  constructor(public navCtrl: NavController) {

  }

  returnSearch(){
    this.navCtrl.push(SearchPage, {
    });
  }

}
