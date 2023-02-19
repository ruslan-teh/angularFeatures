import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../interfaces";
import {PostService} from "../../servises/posts/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(): void{
    this.postService.getAllPosts().subscribe(value => this.posts = value)
  }


}
