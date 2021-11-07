import { Directive, Output, EventEmitter, HostListener, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Directive({
  selector: '[appGallerytres]'
})
export class GallerytresDirective {
  @ViewChild('dento', {read: ElementRef}) element: any  ; 
  @Output() clickElsewhere = new EventEmitter<MouseEvent>(); 
 
  @Output()movieminetomause : EventEmitter<any> = new EventEmitter()
  constructor(@Inject(DOCUMENT) private document : Document, private el:ElementRef) {
   }


 

  
}
