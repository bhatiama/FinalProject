import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import {  PostService } from '../post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSub : Subscription;
  constructor(public postsService: PostService) { 

  }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }

  onDelete(postId: string){
    this.postsService.deletePost(postId);
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
