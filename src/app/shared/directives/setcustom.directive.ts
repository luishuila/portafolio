import { Directive, Output, ViewChild, ElementRef, Inject, EventEmitter, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appSetcustom]'
})
export class SetcustomDirective {
  @ViewChild('input', {read: ElementRef}) element: any  ;
  @Output()movieminetomause : EventEmitter<any> = new EventEmitter()
  constructor(@Inject(DOCUMENT) private document : Document, private el:ElementRef) {

   }

   @HostListener("mouseover", ['$event'])

   @HostListener('mouseover', ['$event'])
   onMouseOver() {

    this.el.nativeElement.focus({preventScroll:true});
    return true

   }

   @HostListener('mouseout', ['$event'])
  public onMouseOut() {
     this.movieminetomause.emit(0);
   }
}
