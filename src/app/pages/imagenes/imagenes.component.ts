import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FileItem } from './../../config/models/file-item';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  formulario = {
    nombreimg:"",
    descripcion:"",
    selecion:""

  }

  estasobre:boolean = false
  archivos : FileItem[]=[]
  arrayproyectos:any
  arrayviajes:any
  constructor(private _services:FirebaseService) {
    this._services.GetImagenes('viajes').subscribe(data=>this.arrayviajes = data)
    this._services.GetImagenes('proyectos').subscribe(data=>this.arrayproyectos =data)
   }

  ngOnInit(): void {
  }

  subiimagen(){

    this._services.guardaimage(this.formulario ,this.archivos)
  }
  limpiaArchivo(){
    this.archivos = []
  }

  eliminar(id:any,data){
    const path = "proyectos"
    this._services.ImageEliminar(id,data,path)
  }

  eliminarviajes(id:any,data){
    const path = "viajes"
    this._services.ImageEliminar(id,data,path)
  }

}
