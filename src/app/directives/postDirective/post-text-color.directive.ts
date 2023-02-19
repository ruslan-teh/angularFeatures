import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPostTextColor]',
  standalone: true
})
export class PostTextColorDirective {

  @Input()
  color = ''

  constructor(private hostElement: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.color = this.color
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hostElement.nativeElement.style.color = ''
  }
}
