import { Directive, Output, Inject, HostListener,EventEmitter } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollAbajo]'
})
export class ScrollAbajoDirective {
  @Output()moviemineto : EventEmitter<any> = new EventEmitter()
  constructor(@Inject(DOCUMENT) private document : Document) {

   }
   @HostListener('window:scroll', ['$event'])
   public scrollElemnto(event:any){



  }
}
