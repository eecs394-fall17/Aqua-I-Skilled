import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateprofilePage } from '../createprofile/createprofile';

import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
  providers: [FirebaseProvider],
})
export class EditprofilePage {

  user:any;
  lessons:any;

  constructor(public navCtrl: NavController,
              public dbProv: FirebaseProvider,
              public navParams: NavParams) {
    this.user = this.navParams.get('user');

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
}
