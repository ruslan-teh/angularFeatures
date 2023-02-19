import { Directive } from '@angular/core';
import {PostUppercaseDirective} from "./post-uppercase.directive";
import {PostTextColorDirective} from "./post-text-color.directive";

@Directive({
  selector: '[appPost]',
  standalone: true,
  hostDirectives: [
    PostUppercaseDirective,
    {
      directive: PostTextColorDirective,
      inputs: [
        'color: textColor'
      ]
    }
  ]
})
export class PostDirective {

  constructor() { }

}
