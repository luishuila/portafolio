import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  varibale:boolean = false
  constructor() { }

  ngOnInit(): void {

  }
  doSomethingOnInternalScroll($event:any){

    this.varibale = $event

  }
}
