import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';


@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html'
})
export class CreateprofilePage {

  user:any;
  masterskills = [
"poetry writing",
"novels writing",
"short stories writing",
"Ballet",
"Waltz",
"Quickstep",
"Tango",
"Swing dance",
"Hip-hop dance",
"Belly dance",
"pole dancing",
"Oil Paint",
"Acrylic Paint",
"Gouache paint",
"Ink paintings",
"Photography",
"Ceramic art",
"Stone sculpture",
"Metal sculpture",
"Glass sculpture",
"Wood carving",
"Chinese Drama",
"Musical theatre",
"Improvisation",
"Cartoon drawing",
"Magic",
"Public speaking",
"opera",
"puppetry",
"Juggling",
"Mime",
"Modern dance",
"Chinese opera",
"Shakespeare",
"Street dance",
"Djembe",
"Harmonica/Mouth-Organ",
"Creating Synthesizer Sounds for Electronic Music",
"History of Rock",
"Drum Set",
"The music of the Beatles",
"Bar Chimes",
"Musicianship",
"Accordion",
"Electone",
"String Quartet",
"Violins and viola education",
"Music ensemble rehearsal basics",
"Rolling Stones music appreciation",
"Electric Guitar",
"Jazz appreciation",
"Hip-hop music",
"Clarinet",
"Chinese drama music",
"Italian opera",
"Piccolo",
"European classical music",
"Persian classical music",
"Korean court music",
"Chinese traditional music",
"Folk music",
"Violin",
"Piano",
"Celesta",
"Organ",
"Bassoon",
"Oboe",
"Bugle",
"Trumpet",
"Clarinet",
"Sign Language",
"Italian Language",
"Arabic Language",
"Spanish Language",
"French Language",
"English Language",
"Portugese Language",
"Gaelic Language",
"Russian Language",
"Polish Language",
"Afrikaans Language",
"Latin Language",
"Mandarin Language",
"Cantonese Language",
"Taiwanese Language",
"Filipino Language",
"Thai Language",
"Kurdish Language",
"Nordic Language",
"Swedish Language",
"Finnish Language",
"German Language",
"Czech Language",
"Dutch Language",
"Maori Language",
"Swahili Language",
"Bemba Language",
"Yiddish Language",
"Persian Language",
"Kazakh Language",
"Turkish Language",
"Egyptian Language",
"Greek Language",
"Creole Language",
"Vietnamese Language",
"Spark plugs replacement",
"Distributor cap and rotor replacement",
"Change air filter",
"Change the transmission fluid",
"oxygen sensors replacement",
"Inspect the shocks for leaks and perform bounce test",
"Car PCV valve replacement",
"The Car throttle body cleaning",
"Tires Rotation",
"Change tires",
"The automobile battery connections cleaning",
"Change car battery",
"the fuel filter replacement",
"the rear axle lubricant replacement",
"Flush the car coolant system",
"Add fuel injector cleaner to fuel",
"Change Car lamps",
"the car waxing",
"food disposal Installation",
"Food composting",
"install and repair water supply lines",
"fixtures of heating, water, or drainage systems",
"wall painting",
"carpet Installation",
"wood floor Installation",
"faucet Installation",
"woodworking",
"gardening",
"Change windows",
"garage door Installation",
"doors Installation",
"Change door lock",
"change a/c filter",
"air conditioner Installation",
"home security system Installation",
"3D printing",
"Acting",
"Amateur radio",
"Baton twirling",
"Board/Tabletop games",
"Book restoration",
"Cabaret",
"Calligraphy",
"Candle making",
"Coffee roasting",
"Coloring",
"Lego building",
"Machining",
"Cosplaying",
"Couponing",
"Creative writing",
"Crocheting",
"Cross-stitch",
"Crossword puzzles",
"Cryptography",
"Dance",
"Digital arts",
"Do it yourself",
"Drama",
"Drawing",
"Electronics",
"Embroidery",
"Fantasy Sports",
"Fashion",
"Fishkeeping",
"Flower arranging",
"Genealogy",
"Glassblowing",
"Gunsmithing",
"Herp keeping",
"Rock climbing",
"Snowboarding",
"Skatboarding",
"Inline skating",
"Ice skating",
"Swimming",
"Archery",
"Downhill skiing",
"Fishing",
"Yoga",
"Surfing",
"Tennis",
"Sailing",
"Kayaking",
"Mountaineering",
"Baseball",
"American Football",
"Disc golf",
"Golf",
"Mountain biking",
"Stand up paddle boarding",
"Scuba diving",
"Karate",
"MMA",
"Boxing",
"Brazilian Juli Jitzu",
"Kickboxing",
"Cross country skiing",
"Skeet shooting",
"Fly fishing",
"Wake boarding",
"Water skiing",
"Snorkelling",
"Olympic weightlifting",
"Rowing",
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = {
      name: "Name",
      zip: "Zip",
      gender: "Gender",
      age: "Age",
      keywords: "Skills",
      description: "Description\nExample: I am a professional chef with 25 years of experience in cooking Chinese and Thai food. I currently work at Novotei.",
      email: "Email",
      password: "Password",
    };

    console.log(this.masterskills);
  }

  logForm() {
    this.navCtrl.push(EditprofilePage, {
      user: this.user
    });
  }


}
