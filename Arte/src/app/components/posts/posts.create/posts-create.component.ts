import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['.//posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {
  enteredTitle='';
  enteredContent='';
  // newPost='something';
  constructor(public postsService: PostService) { }
  
  ngOnInit() {
  }
  AddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    // const post : Post = {title: form.value.title, content: form.value.content}; 
    this.postsService.addPost(form.value.title, form.value.content);
  }
  
}
