import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
  array:any
  constructor(private _services:FirebaseService) {
    this._services.GetImagenes('formulario').subscribe(data=>{

      this.array = data})


   }

  ngOnInit(): void {
  }
  eliminar(id:any){
    const doc = "formulario"
    this._services.consultaEliminar(id,doc)

  }
  contecto(data,id){
    const {active , ...dat} = data
    const datan = {
      ...dat,
      active:1
    }
    const doc = "formulario"
    this._services.consultaUpdated(datan,id,doc)
  }
  espera(data,id){
    const {active , ...dat} = data
    const datan = {
      ...dat,
      active:2
    }
    const doc = "formulario"
    this._services.consultaUpdated(datan,id,doc)
  }
  norma(data,id){
    const {active , ...dat} = data
    const datan = {
      ...dat,
      active:0
    }
    const doc = "formulario"
    this._services.consultaUpdated(datan,id,doc)
  }

}
