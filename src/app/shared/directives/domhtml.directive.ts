import { DOCUMENT } from '@angular/common';
import { Directive,EventEmitter,HostListener, Inject, Output  } from '@angular/core';

@Directive({
  selector: '[appDomhtml]'
})
export class DomhtmlDirective {
  @Output()moviemineto : EventEmitter<any> = new EventEmitter()
  constructor(@Inject(DOCUMENT) private document : Document) {

   }
   @HostListener('window:scroll', ['$event'])


  public doSomethingOnInternalScroll(event:any){

    if(this.document.documentElement.scrollTop > 40){

      return this.moviemineto.emit(true)
     }else{

      return this.moviemineto.emit(false)
     }

  }
}
