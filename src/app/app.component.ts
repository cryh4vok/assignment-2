import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';

  constructor() {}

  checkUsername() {
    if (this.username === '') {
      return true;
    }
  }

  onSetUsername() {
    this.username = '';
  }
  ngOnInit() {}
}
