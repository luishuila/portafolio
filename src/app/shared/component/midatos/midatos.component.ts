import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-midatos',
  templateUrl: './midatos.component.html',
  styleUrls: ['./midatos.component.scss']
})
export class MidatosComponent implements OnInit {
  dataperfin:any
  constructor(
    private _services:FirebaseService) {
    this._services.GetconsultaDatos('perfil').subscribe(data=>{
      this.dataperfin =data})
  }
  ngOnInit(): void {
  }

}
