import {Component, Input, OnInit} from '@angular/core';
import {IPosts, IUser} from "../../interfaces";
import {PostService} from "../../servises/posts/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  activePost: boolean = false;

  @Input()
  user: IUser
  @Input()
  color: string

  post: IPosts[]

  constructor(private postService:PostService,
              private activateRoute: ActivatedRoute,
              private router:Router
  ) {
  }

  ngOnInit(): void {

  }

  getPostsByUserId(userId: number):any {
    this.postService.getPostsByUserId(userId).subscribe(value =>  this.post = value)
    this.activePost = !this.activePost;
  }

  userDetail(user: IUser) {
    this.router.navigate([user.id], {relativeTo: this.activateRoute, state: {data: user}})
  }
}

