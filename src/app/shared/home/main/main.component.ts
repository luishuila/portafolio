import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from './../../../services/firebase.service';

import { Observable} from 'rxjs';

import { DatosItem } from 'src/app/config/models/file-item';
import { ImagenesComponent } from '../../component/imagenes/imagenes.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(ImagenesComponent,{static:false} )
  alertaImg:ImagenesComponent = new ImagenesComponent()
  recore:any = [1,2,3,5,6]
  datos:Observable<DatosItem[]> | undefined
  numero:number = 0
  cargado =  false
  url = "../../../../assets/icons/"

  variable:any
  datoss:any
  carga:boolean = false
  @ViewChild('Midse', {read: ElementRef}) element:any
    constructor(private _Service:FirebaseService, public el : ElementRef) {
      this.datos =  this._Service.GetImagenes('proyectos')

      this.element = el

    for (let index = 0; index <= 2; index++) {
      this.recore.push(index);
    }
   }

  ngOnInit(): void {

    this.cargado = true


    }

    eventos(event:any){
      this.numero = Number( event)
    }

    aletraevento(item:any){

      this.alertaImg.imgmostra(item)

    }
    masue($any:any){

    }
}
