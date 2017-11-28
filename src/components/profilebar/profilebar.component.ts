import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-profilebar',
  templateUrl: 'profilebar.html'
})

export class ProfileBarComponent {
  @Input() user: object;

  ngOnInit() {
    var names = this.user.name.split(' ');
    this.user.email = names[0] + "." + names[names.length - 1] + "@gmail.com";
  }
}