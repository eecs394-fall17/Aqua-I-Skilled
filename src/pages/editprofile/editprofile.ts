import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CreateprofilePage } from '../createprofile/createprofile';
import { SearchPage } from '../../pages/search/search';

import { FirebaseProvider } from '../../providers/firebase';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
  providers: [FirebaseProvider],
})
export class EditprofilePage {

  user:any;
  lessons:any;
  newLesson:any;

masterskills = ['3d printing', 'Accordion', 'Acrylic paint', 'Acting', 'Add fuel injector cleaner to fuel', 'Afrikaans language', 'Air conditioner installation', 'Amateur radio', 'American football', 'Arabic language', 'Archery', 'Ballet', 'Bar chimes', 'Baseball', 'Bassoon', 'Baton twirling', 'Belly dance', 'Bemba language', 'Board/tabletop games', 'Book restoration', 'Boxing', 'Brazilian juli jitzu', 'Bugle', 'Cabaret', 'Calligraphy', 'Candle making', 'Cantonese language', 'Car pcv valve replacement', 'Carpet installation', 'Cartoon drawing', 'Celesta', 'Ceramic art', 'Change a/c filter', 'Change air filter', 'Change car battery', 'Change car lamps', 'Change door lock', 'Change the transmission fluid', 'Change tires', 'Change windows', 'Chinese drama', 'Chinese drama music', 'Chinese opera', 'Chinese traditional music', 'Clarinet', 'Clarinet', 'Coffee roasting', 'Coloring', 'Cosplaying', 'Couponing', 'Creating synthesizer sounds for electronic music', 'Creative writing', 'Creole language', 'Crocheting', 'Cross country skiing', 'Cross-stitch', 'Crossword puzzles', 'Cryptography', 'Czech language', 'Dance', 'Digital arts', 'Disc golf', 'Distributor cap and rotor replacement', 'Djembe', 'Do it yourself', 'Doors installation', 'Downhill skiing', 'Drama', 'Drawing', 'Drum set', 'Dutch language', 'Egyptian language', 'Electone', 'Electric guitar', 'Electronics', 'Embroidery', 'English language', 'European classical music', 'Fantasy sports', 'Fashion', 'Faucet installation', 'Filipino language', 'Finnish language', 'Fishing', 'Fishkeeping', 'Fixtures of heating, water, or drainage systems', 'Flower arranging', 'Flush the car coolant system', 'Fly fishing', 'Folk music', 'Food composting', 'Food disposal installation', 'French language', 'Gaelic language', 'Garage door installation', 'Gardening', 'Genealogy', 'German language', 'Glass sculpture', 'Glassblowing', 'Golf', 'Gouache paint', 'Greek language', 'Gunsmithing', 'Harmonica/mouth-organ', 'Herp keeping', 'Hip-hop dance', 'Hip-hop music', 'History of rock', 'Home security system installation', 'Ice skating', 'Improvisation', 'Ink paintings', 'Inline skating', 'Inspect the shocks for leaks and perform bounce test', 'Install and repair water supply lines', 'Italian language', 'Italian opera', 'Jazz appreciation', 'Juggling', 'Karate', 'Kayaking', 'Kazakh language', 'Kickboxing', 'Korean court music', 'Kurdish language', 'Latin language', 'Lego building', 'Machining', 'Magic', 'Mandarin language', 'Maori language', 'Metal sculpture', 'Mime', 'Mma', 'Modern dance', 'Mountain biking', 'Mountaineering', 'Music ensemble rehearsal basics', 'Musical theatre', 'Musicianship', 'Nordic language', 'Novels writing', 'Oboe', 'Oil paint', 'Olympic weightlifting', 'Opera', 'Organ', 'Other', 'Oxygen sensors replacement', 'Persian classical music', 'Persian language', 'Photography', 'Piano', 'Piccolo', 'Poetry writing', 'Pole dancing', 'Polish language', 'Portugese language', 'Public speaking', 'Puppetry', 'Quickstep', 'Rock climbing', 'Rolling stones music appreciation', 'Rowing', 'Russian language', 'Sailing', 'Scuba diving', 'Shakespeare', 'Short stories writing', 'Sign language', 'Skatboarding', 'Skeet shooting', 'Snorkelling', 'Snowboarding', 'Spanish language', 'Spark plugs replacement', 'Stand up paddle boarding', 'Stone sculpture', 'Street dance', 'String quartet', 'Surfing', 'Swahili language', 'Swedish language', 'Swimming', 'Swing dance', 'Taiwanese language', 'Tango', 'Tennis', 'Thai language', 'The automobile battery connections cleaning', 'The car throttle body cleaning', 'The car waxing', 'The fuel filter replacement', 'The music of the beatles', 'The rear axle lubricant replacement', 'Tires rotation', 'Trumpet', 'Turkish language', 'Vietnamese language', 'Violin', 'Violins and viola education', 'Wake boarding', 'Wall painting', 'Waltz', 'Water skiing', 'Wood carving', 'Wood floor installation', 'Woodworking', 'Yiddish language', 'Yoga'];

  constructor(public navCtrl: NavController,
              public dbProv: FirebaseProvider,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private storage: Storage) {
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
        this.lessons[i]['key'] = lessons[i].payload.key;
      }
    });

    this.newLesson = {
      name: this.user["name"],
      time: (new Date()).toISOString(),
    }
  }

  timeStrFor(date) {
    var hours = date.getUTCHours();
    var isPm = hours > 12;
    hours -= (isPm ? 12 : 0);
    var minutes = date.getUTCMinutes();
    var mins = (minutes < 10 ? "0" + minutes : minutes.toString())
    return hours + ":" + mins + (isPm ? "pm" : "am");
  }

  dateStrFor(date) {
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    return days[date.getUTCDay()] + " " + mons[date.getUTCMonth()] + " " + date.getUTCDate();
  }

  addLesson() {
    this.dbProv.db.list('/lessons').push(this.newLesson);
  }

  removeLesson(lesson) {
    this.dbProv.db.list("/lessons").remove(lesson.key);
  }

  signOut() {
    this.storage.remove('account').then(() => {
      this.navCtrl.setRoot(SearchPage)      
    });
  }

  parseStrInt(val) {
    return parseInt(val);
  }

  popupPoints() {
    var comp = this;

    let alert = this.alertCtrl.create({
      message: 'Our community skill sharing platform uses points for payment. Each account is granted 100 points to get started. Earn points when your friends and family sign up, or when you teach a lesson.',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        },
      ]
    });
    alert.present();
  }
}
