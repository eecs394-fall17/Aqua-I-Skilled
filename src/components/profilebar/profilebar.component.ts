import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-profilebar',
  templateUrl: 'profilebar.html'
})

export class ProfileBarComponent {
  @Input() user: object;
}