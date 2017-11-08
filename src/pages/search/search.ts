import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

import { FirebaseProvider } from '../../providers/firebase';
import { SearchProvider } from '../../providers/search';

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
          var star = parseInt(this.skills[i]['rating']);
          this.skills[i]['starRange'] = Array(star);
        }
        //console.log("Filtering: ");
        this.filterSkills();
      });
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              private searchProv: SearchProvider) {
    this.skillSearch = "";
    this.pullFilterSkills();
  }

  onSearchInput(event) {
    this.skillSearch = event.target.value;
    //console.log("Search executing: " + this.skillSearch);
    this.pullFilterSkills();
  }

  filterSkills() {
    if (this.skillSearch == "") {
      this.skills = []; 
      return;
    }

    this.skills = this.searchProv.filter(this.skills, this.skillSearch);
  }

  onSearchCancel(event) {
    //console.log("Search cancelled");
  }

  confirmTrans(result){
    this.navCtrl.push(ProfilePage, {
      skill: result
    });
  }

}
