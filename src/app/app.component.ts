import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'action';
  value = 10;
  data = 'x';
  updateData(item: string) {
    console.log(item);
    this.data = item;
  }
}
