import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase';

import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'page-addskill',
  templateUrl: 'addskill.html',
  providers: [FirebaseProvider],
})
export class AddSkillPage {
  
  skills:any;
  skill:any;

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider) {
    this.skills = dbProv.db.list("skills");
    this.skill = {}
  }

  logForm() {
    this.skills.push(this.skill);
    this.navCtrl.setRoot(SearchPage);
  }
}
