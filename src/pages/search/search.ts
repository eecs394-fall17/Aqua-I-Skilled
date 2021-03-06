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

  searchedYet:any;

  users:any;

  ngOnInit() {
  }

  pullFilterSkills() {
    this. dbProv.db.list("/users").valueChanges().subscribe(users => {
      this.users = users;
      for (var i = 0; i < users.length; i++) {
        var star = parseInt(parseFloat(users[i]['rating']).toFixed(0));
        this.users[i]['starRange'] = Array(star);
      }
    
      this.filterSkills();
    });
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              private searchProv: SearchProvider) {
    this.skillSearch = "";
    this.pullFilterSkills();
    this.searchedYet = 0;
  }

  previewFile() {
    var file    = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
    //var file = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    var dbProv = this.dbProv;
    reader.addEventListener("load", function () {
      //console.log(reader.result);
      dbProv.addImage(reader.result, file['name'].split('.')[0]);
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

    this.searchedYet = 1;
    document.getElementById('background-content').setAttribute('style',"");
    this.users = this.searchProv.filter(this.users, this.skillSearch);
  }

  onSearchCancel(event) {
    //console.log("Search cancelled");
    this.users = [];
    this.skillSearch = "";
  }

  confirmTrans(result){
    this.navCtrl.push(ProfilePage, {
      user: result
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

  insertReviews() {
    var data = [];

    this.parseReviews(data, 0, this.dbProv, this.parseReviews);
  }

  parseReviews(data, i, dbProv, parse) {
    if (i == data.length)
      return;
    var review = data[i];

    var query = dbProv.db.list('/users', ref => ref.orderByChild('name').equalTo(review['name'])).snapshotChanges().subscribe(function (users) {
      if (users.length == 1) {
        var user = users[0].payload;

        dbProv.db.list('/reviews').push({
          name: review['name'],
          review: review['review'],
          rating: review['rating'],
          reviewer: "Anonymous"
        });
      }

      parse(data, i+1, dbProv, parse);
    });
  }

  insertLessons() {
    var data = [];
  
    this.parseLessons(data, 0, this.dbProv, this.parseLessons);
  }

  parseLessons(data, i, dbProv, parse) {
    if (i == data.length)
      return;
    var lesson = data[i];

    var query = dbProv.db.list('/users', ref => ref.orderByChild('name').equalTo(lesson['name'])).snapshotChanges().subscribe(function (users) {
      if (users.length == 1) {
        var user = users[0].payload;
        var lessonStrs = lesson['time'].split(',').join('').split('; ');
        var times = [];

        for (var strI = 0; strI < lessonStrs.length; strI++) {
          var strParts = lessonStrs[strI].split(' ');
          console.log(strParts);
          var hS = strParts[0];
          var hour = parseInt(hS.substring(0,hS.length - 2));
          hour = (hour == 12 ? 0 : hour);
          hour += (hS.substring(hS.length - 2) == "pm" ? 12 : 0);

          var dS = strParts[1];
          var day = parseInt(dS.substring(0,dS.length - 2));

          var mS = strParts[2];
          var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
          var month = months.findIndex(el => el == mS);

          var year = parseInt(strParts[3]);

          times.push(new Date(year, month, day, hour, 0, 0, 0));
        }
        
        times.forEach(time => {
          dbProv.db.list('/lessons').push({
            name: user.val()['name'],
            time: time.toISOString()
          })
        });
      }
      console.log("Moving on");
      parse(data, i+1, dbProv, parse);
    });
  }

}
