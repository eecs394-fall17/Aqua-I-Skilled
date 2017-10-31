import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';

import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [FirebaseProvider],
})
export class SearchPage {
  
  skills:any;
  skillSearch:any;

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider) {
    this.skills = dbProv.db.list("skills").valueChanges();
    /*subscribe(skills => {
      this.skills = skills;
    });*/
  }

  onSearchInput(event) {
    console.log("Search executed");
  }

  onSearchCancel(event) {
    console.log("Search cancelled");
  }

  confirmTrans(result){
    this.navCtrl.push(TransconfirmPage, {
      skill: result.keywords.split(";")[0],
      giver: result.name,
      dist: result.distance,
      num_stars: result.stars
    });
  }


}
