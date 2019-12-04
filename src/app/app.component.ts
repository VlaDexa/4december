import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decemba';
  ryd = 'red';
  fuku() {
    console.log('соси');
  }
  Shower() {
    document.getElementById('show').classList.toggle('unshown');
  }
}
