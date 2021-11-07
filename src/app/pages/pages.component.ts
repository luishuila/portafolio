import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private service:FirebaseService) { }

  ngOnInit(): void {
  }

  logincreate(){
  //  this.service.Createfirabase()
  }
}
