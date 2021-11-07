import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FileItem } from '../../config/models/file-item';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  formulario = {
    nombreimg:"",
    selecion:"habilidades",
    titulo:"",
    tecnologia:"",
    subhijo:"",
    descripcion:"",
    color:"",

  }

  estasobre:boolean = false
  archivos : FileItem[]=[]
  arrayproyectos:any
  arrayviajes:any
  habilidades:any
  aprender:any
  constructor(private _services:FirebaseService) {
    this._services.GetImagenes('aprender').subscribe(data=>this.aprender = data)
    this._services.GetImagenes('habilidades').subscribe(data=>this.habilidades =data)
   }

  ngOnInit(): void {
  }
  subiimagen(){

    this._services.guardaimagehabilidaes(this.formulario ,this.archivos)
  }
  limpiaArchivo(){
    this.archivos = []
  }


  eliminarAprendes(id:any,data:any){
    const path = "aprender"
    this._services.ImageEliminar(id,data,path)
  }
  eliminarHabilidades(id:any,data:any){
    const path = "habilidades"
    this._services.ImageEliminar(id,data,path)
  }


}
