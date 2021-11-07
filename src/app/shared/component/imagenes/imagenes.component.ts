import { Component, OnInit } from '@angular/core';
import { DatosItem } from './../../../config/models/file-item';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {
  datos:DatosItem 
  public active: Boolean;

  constructor() {
    this.datos = {
      nombreImages:"",
      trabajos:"",
      descripcion:"",
      selecion:"",
      url:"",
      nombreArchivo:"",
      id:""
    }
    this.active = false;
  }

  ngOnInit() {}

  ocultar() {
    this.active = false;
  }

  mostrar() {
    this.active = true;
  }

  imgmostra(data:DatosItem){
   this.datos = data
    this.mostrar()
  }
}
