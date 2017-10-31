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

  pullFilterSkills() {
    this.dbProv.db.list("skills").valueChanges()
      .subscribe(skills => {
        this.skills = skills;
        for (var i = 0; i < this.skills.length; i++) {
          var star = parseInt(this.skills[i]['stars']);
          this.skills[i]['starRange'] = Array(star);
        }
        console.log("Filtering: ");
        this.filterSkills();
      });
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider) {
    this.skillSearch = "";
    this.pullFilterSkills();
  }

  onSearchInput(event) {
    this.skillSearch = event.target.value;
    console.log("Search executing: " + this.skillSearch);
    this.pullFilterSkills();
  }

  filterSkills() {
    if (this.skillSearch == "")
      return;

    var filteredSkills = [];
    for (var i = 0; i < this.skills.length; i++) {
      var keywords = this.skills[i]['keywords'].split(';');
      var keywordFound = false;
      for (var j = 0; j < keywords.length; j++) {
        if (keywords[j] == this.skillSearch) {
          keywordFound = true;
          break;
        }
      }
      if (keywordFound) {
        filteredSkills.push(this.skills[i]);
      }
    }
    console.log(filteredSkills);
    this.skills = filteredSkills;
  }

  onSearchCancel(event) {
    console.log("Search cancelled");
  }

  confirmTrans(result){
    this.navCtrl.push(TransconfirmPage, { 
      skill: result
    });
  }


}
