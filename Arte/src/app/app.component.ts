import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arte';
  showVar: boolean = false;
  showVar1: boolean = true;
  constructor() { }
  ngOnInit() {
  }
}
