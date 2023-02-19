import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostService} from "../../servises/posts/post.service";
import {PostsComponent} from "../../components/posts/posts.component";
import {PostComponent} from "../../components/post/post.component";
import {PostDirective} from "../../directives";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
    exports: [
        PostsComponent,
        PostComponent
    ],
  providers: [
    PostService
  ]
})
export class PostModule { }
