import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../interfaces";
import {PostDirective} from "../../directives";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  hostDirectives: [PostDirective]
})
export class PostComponent implements OnInit {

  @Input()
  post: IPosts

  constructor() { }

  ngOnInit(): void {
  }

}
