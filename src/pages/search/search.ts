import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

import { FirebaseProvider } from '../../providers/firebase';
import { SearchProvider } from '../../providers/search';

import * as firebase from "firebase";
import 'firebase/firestore';
import {AngularFirestore} from "angularfire2/firestore";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [FirebaseProvider],
})
export class SearchPage {

  skills:any;
  skillSearch:any;

  users:any;

  pullFilterSkills() {
    this. dbProv.db.list("/users").valueChanges().subscribe(users => {
      this.users = users;
      for (var i = 0; i < users.length; i++) {
        var star = parseInt(users[i]['rating']);
        this.users[i]['starRange'] = Array(star);

        this.filterSkills();
      }
    });
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              private searchProv: SearchProvider) {
    this.skillSearch = "";
    this.pullFilterSkills();
  }

  previewFile() {
    var file    = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
    //var file = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    var dbProv = this.dbProv;
    reader.addEventListener("load", function () {
      //console.log(reader.result);
      dbProv.addImage(reader.result, file);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onSearchInput(event) {
    this.skillSearch = event.target.value;
    //console.log("Search executing: " + this.skillSearch);
    this.pullFilterSkills();
  }

  filterSkills() {
    if (this.skillSearch == "") {
      this.users = []; 
      return;
    }

    this.users = this.searchProv.filter(this.users, this.skillSearch);
  }

  onSearchCancel(event) {
    //console.log("Search cancelled");
    this.users = [];
  }

  confirmTrans(result){
    this.navCtrl.push(ProfilePage, {
      skill: result
    });
  }

  /* UTILITY FUNCTIONS FOR DATA INSERTION ONLY */

  insertUsers() {
    // Insert JSON object copied from another file when using this method
    var data = [];
  
    this.populateUser(data, 0, this.dbProv, this.populateUser);
  }

  populateUser(data, i, dbProv, pop) {
    if (i == data.length)
      return;
    var user = data[i];
    console.log("creating");

    var query = dbProv.db.list('/users',ref => ref.orderByChild('name').equalTo(user['name'])).snapshotChanges().subscribe(function(users) {
      if (users.length == 0) {
        dbProv.db.list('/users').push({
          name: user['name'], 
          description: user['description'], 
          rating: user['rating'],
          distance: user['distance'],
          image: "",
          keywords: user['keywords'],
          price: user['price'],
        });
        console.log("created");
      }
      console.log("not created");
      new pop(data, i+1, dbProv, pop);
    });
  }

  encodeImages() {
    var dbProv = this.dbProv;
    dbProv.db.list('/users').snapshotChanges().subscribe(users => {
      users.forEach(u => {
        console.log("User:");
        var u_info = u.payload.val();
        var name = u_info['name'];
        console.log("Name: " + name);
        
        var ref = firebase.storage().ref('images/' + name + '.jpg');
        ref.getDownloadURL().then(function(url) {
          console.log("Found with URL: " + url);
          console.log(u.payload.key);
          dbProv.db.list("/users").update(u.payload.key, {
            image: url
          });
          console.log("Updated");
        }).catch(function(error) {
          console.log("Photo for " + name + " not found");
        });
      });
    });
  }

  insertLessons() {
    var data = [];
    /*for (var i = 0; i < data.length; i++) {
      var lesson = data[i];
      var user = this.dbProv.afs.collection('users', ref => ref.where("name","==",lesson.name)).valueChanges();

      var dbProv = this.dbProv;
      console.log(user);
      user.forEach(function (u) {
        var coll = dbProv.afs.collection('lessons');

        var lessonClass = new Lesson(u[0]['id'], "", "30","",lesson['distance'],lesson['price']);
        lessonClass.id = dbProv.afs.createId();
        coll.add(lessonClass.toObj());
      });
    }*/
  }
}
