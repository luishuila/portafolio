import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../../services/firebase.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-iconos',
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.scss']
})
export class IconosComponent implements OnInit {
 ss
  url = "../../../../assets/icons/"

  variable:any
  datos:any
  carga:boolean = false
    constructor(private _Service:FirebaseService , public config: NgbCarouselConfig) {

  this._Service.Getconsulta('aprender').subscribe(data=>{this.datos= data
    this.carga = true
  })
  this._Service.Getconsulta('habilidades').subscribe(data=>this.variable = data)

  }

  ngOnInit(): void {

  }
  masue($any:any){

  }
}
