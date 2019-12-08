import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostService {

    constructor(private http: HttpClient) { };
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();
    getPosts() {
        // return [...this.posts]
        this.http.get<{ posts: Post[] }>(`http://localhost:3000/posts`).subscribe((postData) => {
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }
    addPost(title: string, content: string) {
        const post: Post = { id: null, title: title, content: content };
        this.http.post<{ message: string }>(`http://localhost:3000/posts`, post)
            .subscribe((resData) => {
                console.log(resData.message);
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            })
    }
}