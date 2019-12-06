import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['.//posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {
  enteredTitle='';
  enteredContent='';
  // newPost='something';
  constructor() { }
  @Output() postCreated = new EventEmitter<Post>();
  
  ngOnInit() {
  }
  AddPost(){
    const post : Post = {title: this.enteredTitle, content: this.enteredContent}; 
    this.postCreated.emit(post);
  }
  
}
