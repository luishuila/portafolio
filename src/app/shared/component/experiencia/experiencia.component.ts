import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {


  url = "../../../../assets/icons/"

  datos:any
  carga:boolean = false
    constructor(private _Service:FirebaseService , public config: NgbCarouselConfig) {

  //    )
  this._Service.Getconsulta('exprecia').subscribe(data=>{
    this.datos= data
    this.carga = true
  })

  }

  ngOnInit(): void {

  }
  masue($any:any){

  }
}
