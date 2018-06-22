import { Component, Input } from "@angular/core";
import { Post } from "../post.model";


@Component({
    templateUrl: './post-detail.component.html',
    selector: 'app-post-detail',
    styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
    // posts = [
    //     {title: 'First Post', content:'This is the first post'},
    //     {title: 'Second Post', content:'This is the Second post'},
    //     {title: 'Third Post', content:'This is the Third post'}
    // ]

    @Input() posts: Post[] = [];
}