import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(private el: ElementRef) {
  }
  @Input() appUser = '';

  @HostListener('mouseenter') onMouseEnter(){
    this.changeColor(this.appUser || 'red')
  }

  @HostListener('mouseleave') onMouseleave(){
    this.changeColor('')
  }


  changeColor(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
