import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  varibale = false
  constructor(@Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {

  }
  doSomethingOnInternalScroll($event:any){

    if($event){
      this.varibale = true

    }else{
      this.varibale = false
    }


  }
  scroll(dta:any){

  }
}
