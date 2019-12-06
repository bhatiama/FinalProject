import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import {  PostService } from '../post.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postsService: PostService) { 

  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();

  }

}
