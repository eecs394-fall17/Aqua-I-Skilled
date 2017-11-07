import { Injectable } from '@angular/core';

import { Platform } from 'ionic-angular';

@Injectable()
export class SearchProvider {
  constructor() {
  }

  filter(skills, search) {
    var searches = this.processSearchStr(search);
    var filteredSkills = [];

    for (var i = 0; i < skills.length; i++) {
      var keywords = skills[i]['keywords'].split(';');
      console.log(keywords);
      var keywordFound = false;

      for (var j = 0; j < keywords.length; j++) {
        var words = this.processSearchStr(keywords[j]);
        if (this.compareSearches(searches, words) != 0) {
          keywordFound = true;
          break;
        }
      }
      if (keywordFound) {
        filteredSkills.push(skills[i]);
      }
    }
    return filteredSkills;
  }

  // Preprocesses string into array of lower case words
  processSearchStr(str) {
    return str.toLowerCase().split(" ");
  }

  // Tallies number of words matching between array of strings
  compareSearches(search, ref) {
    var count = 0;
    for (var i = 0; i < ref.length; i++) {
      for (var j = 0; j < search.length; j++) {
        if (search[j] == ref[i]) {
          count += 1;
        }
      }
    }
    return count;
  }
}