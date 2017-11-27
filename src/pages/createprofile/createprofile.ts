import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { EditprofilePage } from '../editprofile/editprofile';
import { AlertController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase';

import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html',
  providers: [FirebaseProvider, Camera],
})
export class CreateprofilePage {

  user:any;
  keywords:any;
  pnts:any;

masterskills = ['3d printing', 'Accordion', 'Acrylic paint', 'Acting', 'Add fuel injector cleaner to fuel', 'Afrikaans language', 'Air conditioner installation', 'Amateur radio', 'American football', 'Arabic language', 'Archery', 'Ballet', 'Bar chimes', 'Baseball', 'Bassoon', 'Baton twirling', 'Belly dance', 'Bemba language', 'Board/tabletop games', 'Book restoration', 'Boxing', 'Brazilian juli jitzu', 'Bugle', 'Cabaret', 'Calligraphy', 'Candle making', 'Cantonese language', 'Car pcv valve replacement', 'Carpet installation', 'Cartoon drawing', 'Celesta', 'Ceramic art', 'Change a/c filter', 'Change air filter', 'Change car battery', 'Change car lamps', 'Change door lock', 'Change the transmission fluid', 'Change tires', 'Change windows', 'Chinese drama', 'Chinese drama music', 'Chinese opera', 'Chinese traditional music', 'Clarinet', 'Clarinet', 'Coffee roasting', 'Coloring', 'Cosplaying', 'Couponing', 'Creating synthesizer sounds for electronic music', 'Creative writing', 'Creole language', 'Crocheting', 'Cross country skiing', 'Cross-stitch', 'Crossword puzzles', 'Cryptography', 'Czech language', 'Dance', 'Digital arts', 'Disc golf', 'Distributor cap and rotor replacement', 'Djembe', 'Do it yourself', 'Doors installation', 'Downhill skiing', 'Drama', 'Drawing', 'Drum set', 'Dutch language', 'Egyptian language', 'Electone', 'Electric guitar', 'Electronics', 'Embroidery', 'English language', 'European classical music', 'Fantasy sports', 'Fashion', 'Faucet installation', 'Filipino language', 'Finnish language', 'Fishing', 'Fishkeeping', 'Fixtures of heating, water, or drainage systems', 'Flower arranging', 'Flush the car coolant system', 'Fly fishing', 'Folk music', 'Food composting', 'Food disposal installation', 'French language', 'Gaelic language', 'Garage door installation', 'Gardening', 'Genealogy', 'German language', 'Glass sculpture', 'Glassblowing', 'Golf', 'Gouache paint', 'Greek language', 'Gunsmithing', 'Harmonica/mouth-organ', 'Herp keeping', 'Hip-hop dance', 'Hip-hop music', 'History of rock', 'Home security system installation', 'Ice skating', 'Improvisation', 'Ink paintings', 'Inline skating', 'Inspect the shocks for leaks and perform bounce test', 'Install and repair water supply lines', 'Italian language', 'Italian opera', 'Jazz appreciation', 'Juggling', 'Karate', 'Kayaking', 'Kazakh language', 'Kickboxing', 'Korean court music', 'Kurdish language', 'Latin language', 'Lego building', 'Machining', 'Magic', 'Mandarin language', 'Maori language', 'Metal sculpture', 'Mime', 'Mma', 'Modern dance', 'Mountain biking', 'Mountaineering', 'Music ensemble rehearsal basics', 'Musical theatre', 'Musicianship', 'Nordic language', 'Novels writing', 'Oboe', 'Oil paint', 'Olympic weightlifting', 'Opera', 'Organ', 'Other', 'Oxygen sensors replacement', 'Persian classical music', 'Persian language', 'Photography', 'Piano', 'Piccolo', 'Poetry writing', 'Pole dancing', 'Polish language', 'Portugese language', 'Public speaking', 'Puppetry', 'Quickstep', 'Rock climbing', 'Rolling stones music appreciation', 'Rowing', 'Russian language', 'Sailing', 'Scuba diving', 'Shakespeare', 'Short stories writing', 'Sign language', 'Skatboarding', 'Skeet shooting', 'Snorkelling', 'Snowboarding', 'Spanish language', 'Spark plugs replacement', 'Stand up paddle boarding', 'Stone sculpture', 'Street dance', 'String quartet', 'Surfing', 'Swahili language', 'Swedish language', 'Swimming', 'Swing dance', 'Taiwanese language', 'Tango', 'Tennis', 'Thai language', 'The automobile battery connections cleaning', 'The car throttle body cleaning', 'The car waxing', 'The fuel filter replacement', 'The music of the beatles', 'The rear axle lubricant replacement', 'Tires rotation', 'Trumpet', 'Turkish language', 'Vietnamese language', 'Violin', 'Violins and viola education', 'Wake boarding', 'Wall painting', 'Waltz', 'Water skiing', 'Wood carving', 'Wood floor installation', 'Woodworking', 'Yiddish language', 'Yoga'];

  ngOnInit() {
  }

  constructor(public navCtrl: NavController,
              private dbProv: FirebaseProvider,
              public navParams: NavParams,
              private storage: Storage,
              public alertCtrl: AlertController,
              private camera: Camera) {
    this.user = {
      name: "",
      zip: "",
      gender: "Gender",
      age: "",
      keywords: "",
      description: "",
      email: "",
      password: "",
      image: "",
      price: "",
      rating: "",
      distance: "",
    };

    this.keywords = [];
    this.pnts = [];
  }

  logForm() {
    if (this.user.name == "")
      return;

    this.user.keywords = this.keywords.join(';');
    this.user.pnts = this.pnts.join(";");
    this.user.balance = 100;

    this.dbProv.addUserWithImage(this.user);
    this.storage.set('account',this.user.name);
    this.navCtrl.setRoot(SearchPage);
    this.navCtrl.push(EditprofilePage, {
      user: this.user
    });
  }

  pntsChange(i) {
    var el = document.getElementById('pnts-' + i) as HTMLInputElement;
    this.pnts[i] = el.value;
  }

  addSkill() {
    var sel = document.getElementById('skillSelect') as HTMLSelectElement;
    var txt = sel.options[sel.selectedIndex].text;
    if (this.keywords.findIndex(x => x == txt) == -1) {
      this.keywords.push(txt);
      this.pnts.push("");
    }

    sel.value = "Skills";
  }

  removeSkill(skill) {
    var newKeys = [];
    var newPnts = [];

    for (var i = 0; i < this.keywords.length; i++) {
      if (this.keywords[i] == skill) continue;

      newKeys.push(this.keywords[i]);
      newPnts.push(this.pnts[i]);
    }

    this.keywords = newKeys;
    this.pnts = newPnts;
  }

  addPhoto() {
    const options: CameraOptions = {
      //sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.image = base64Image;
    }, (err) => {
     // Handle error
     console.log(err);
    });
  }

  popupPoints() {
    var comp = this;

    let alert = this.alertCtrl.create({
      message: 'Our community skill sharing platform uses points for payment. Each account is granted 100 points to get started. Earn points when your friends and family sign up, or when you teach a lesson.'
    });
    alert.present();
  }
}
