import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-reactive-forms></app-reactive-forms>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'reactive-forms';
}
