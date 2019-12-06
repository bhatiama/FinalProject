import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arte';
  posts=[];
  showVar: boolean = false;
  showVar1: boolean = true;
  constructor() { }
  ngOnInit() {
  }
  onPostAdded(post){
    this.posts.push(post);
  }
}
