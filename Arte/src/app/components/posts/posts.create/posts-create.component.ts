import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
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
  AddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const post : Post = {title: form.value.title, content: form.value.content}; 
    this.postCreated.emit(post);
  }
  
}
