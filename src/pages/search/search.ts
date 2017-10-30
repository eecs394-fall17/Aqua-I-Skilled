import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  skillSearch:any;

  public results:any;

  constructor(public navCtrl: NavController) {
    this.results = [
      {
        keywords: ["oil change", "automotive"],
        name: "Daniel",
        distance: "0.8 miles",
        stars: 4,
      },
    ];
  }

  onSearchInput(event) {
    console.log("Search executed");
  }

  onSearchCancel(event) {
    console.log("Search cancelled");
  }

  confirmTrans(results){
  let data = {
    skill: this.results[0].keywords[0],
    giver: this.results[0].name,
    dist: this.results[0].distance,
    num_stars: this.results[0].stars

  }

    this.navCtrl.push(TransconfirmPage, data);
  }


}
