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

  ngOnInit() {
    this.dbProv.db.list("skills").valueChanges()
      .subscribe(skills => {
        this.skills = skills;
        for (var i = 0; i < this.skills.length; i++) {
          var star = parseInt(this.skills[i]['stars']);
          this.skills[i]['starRange'] = Array(star);
        }
      });
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider) {
  }

  addStarAttr() {
  }

  onSearchInput(event) {
    console.log("Search executed");
    filteredSkills = []
    // Populate filteredSkills with object in 'skills' that match the keyword searched
    // If no keyword, don't filter
    // this.skills = filteredSkills;
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
