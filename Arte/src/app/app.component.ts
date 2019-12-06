import { Component } from '@angular/core';
import { Post } from './components/posts/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arte';
  // posts=[];
  posts: Post [] = [];

  constructor() { }
  ngOnInit() {
  }
  onPostAdded(post){
    this.posts.push(post);
  }
}
