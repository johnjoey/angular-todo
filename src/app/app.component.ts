import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'John';

  constructor() {
    this.changeName('jeff')
  }

  changeName(name:string):void {
    this.name = name;
  }
}
