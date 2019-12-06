import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts = [
    // {title: "1", content:"1"},
    // {title: "2", content:"2"},
    // {title: "3", content:"3"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
