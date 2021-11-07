import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data:any
  constructor(

    private _services:FirebaseService) {
    this._services.GetconsultaDatos('perfil').subscribe(data=>{
      this.data =data
      })
  }


  ngOnInit(): void {
  }

}
