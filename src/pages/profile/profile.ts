import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TransconfirmPage } from '../transconfirm/transconfirm';
import { SearchPage } from '../search/search';

import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user:any;

  lessons:any;
  reviews:any;
  lessonTime:any;

  // Used for accordion dropdown
  openHolder:any;

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.openHolder = 0;
    this.lessonTime = 0;
    var placeString = this.user["name"];
    var placeVar = placeString + "'s Place";

    dbProv.db.list('/lessons', ref => ref.orderByChild('name').equalTo(this.user['name'])).snapshotChanges().subscribe(lessons => {
      this.lessons = [];

      for (var i = 0; i < lessons.length; i++) {
        this.lessons[i] = lessons[i].payload.val();
        var date = new Date(this.lessons[i]['time']);

        this.lessons[i]['timeStr'] = this.timeStrFor(date);
        this.lessons[i]['dateStr'] = this.dateStrFor(date);
        this.lessons[i]['place'] = placeVar;
      }
    });

    dbProv.db.list('/reviews', ref => ref.orderByChild('name').equalTo(this.user['name'])).valueChanges().subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  timeStrFor(date) {
    var hours = date.getHours();
    var isPm = hours > 12;
    hours -= (isPm ? 12 : 0);
    return hours + (isPm ? ":00pm" : ":00am");
  }

  dateStrFor(date) {
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    return days[date.getDay()] + " " + mons[date.getMonth()] + " " + date.getDate();
  }

  // temporary button that takes you to the transConfirm page
  confirmTrans(user){
    this.navCtrl.push(TransconfirmPage, {
      user: user,
      lessonInfo: this.lessons[this.lessonTime],
    });
  }

  toggleLessonRadio(ind) {
    this.lessonTime = ind;
  }

  toggleAccordion(ind) {
    if (this.openHolder != ind)
      this.openHolder = ind;
    else
      this.openHolder = (ind + 1) % 2;
  }

  goToSearch() {
    this.navCtrl.setRoot(SearchPage, {
    });
  }


}
