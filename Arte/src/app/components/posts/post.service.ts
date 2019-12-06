import { Post } from './post.model';

export class PostService {
    private posts: Post[]=[];

    getPosts(){
        return [...this.posts]
    }

    addPost(title: string, content: string){
        const post: Post = {title: title, content:content};
        this.posts.push(post);
    }
}