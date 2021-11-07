import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ViajesComponent implements OnInit {

  images:any
  carga:boolean = false
  constructor(config: NgbCarouselConfig,private _Service:FirebaseService) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    this._Service.GetImagenes('viajes').subscribe(data=>{

      this.images = data
      this.carga = true

    })
  }
  ngOnInit(): void {
  }

}
