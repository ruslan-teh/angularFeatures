import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPostUppercase]',
  standalone: true
})
export class PostUppercaseDirective {

  constructor(private hostElement: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.textTransform = 'uppercase'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hostElement.nativeElement.style.textTransform = 'none'
  }

}
