import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Inject, Output, ViewChild } from '@angular/core';

@Directive({
  selector: '[appTextocentrado]'
})
export class TextocentradoDirective  {
  @ViewChild('Midse', {read: ElementRef}) element: any  ; 
  @Output()movieminetomause : EventEmitter<any> = new EventEmitter()
  constructor(@Inject(DOCUMENT) private document : Document, private el:ElementRef) {
     
   }


  @HostListener("mouseover", ['$event'])
  
  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.movieminetomause.emit( this.el.nativeElement.lastChild.id);
  }

  @HostListener('mouseout', ['$event'])
 public onMouseOut() {
    this.movieminetomause.emit(0);
  }

}
