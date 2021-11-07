import { Directive,Input,ElementRef,OnInit,AfterViewInit } from '@angular/core';
@Directive({
  selector: '[appCambiaestado]'
})
export class CambiaestadoDirective  implements OnInit,AfterViewInit {

  @Input('appCambiaestado')elemntos:any
  constructor(private El:ElementRef) { }
  ngAfterViewInit(){

  }
  ngOnInit(){
    if(this.elemntos == 0	){
      this.El.nativeElement.style.backgroundColor ="RGB(245,245,245)"
    }
    if(this.elemntos == 1	){
      this.El.nativeElement.style.backgroundColor ="RGB(127,255,0)"
    }
    if(this.elemntos == 2	){
      this.El.nativeElement.style.backgroundColor ="RGB(255,99,71)"
    }


  }

}
