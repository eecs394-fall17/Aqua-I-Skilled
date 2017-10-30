import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransconfirmPage } from '../pages/transconfirm/transconfirm';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  skillSearch:any;

  results:any;

  constructor(public navCtrl: NavController) {
    this.results = [
      {
        keywords: ["oil change", "automotive"],
        name: "Daniel",
        distance: "0.8 miles",
        stars: "4 stars",
      },
    ];
  }

  onSearchInput(event) {
    console.log("Search executed");
  }

  onSearchCancel(event) {
    console.log("Search cancelled");
  }

  confirmTrans(){
    this.navCtrl.push(TransconfirmPage);
  }


}
