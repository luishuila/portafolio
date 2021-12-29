import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  dataperfin:any
  formu: FormGroup
  constructor(
    public fb:FormBuilder,
    private _services:FirebaseService) {
    this._services.Getconsulta('perfil').subscribe(data=>{
      this.dataperfin =data

      })
  }

  edita(id:any,data:any){
    this.formu.patchValue({

      id:id,
      perfil:data.perfil,
      nombre: data.nombre,
      edad:data.edad,
      titulo:data.titulo,
      lenguajes:data.lenguajes,
      nacimiento:data.nacimiento,
      vive:data.vive,

      whatsapp:data.whatsapp,
      facebook:data.facebook,
      ubicacion:data.ubicacion,
      informacion:data.informacion,

    })
  }

  ngOnInit(): void {
    this.formu = this.fb.group({
        id:[''],
        perfil:['',[Validators.minLength(3)]],
        nombre: ['',[Validators.minLength(3)]],
        edad:['',[Validators.minLength(3)]],
        titulo:['',[ Validators.minLength(3)]],
        lenguajes:['',[ Validators.minLength(3)]],
        nacimiento:['',[ Validators.minLength(3)]],
        vive:['',[ Validators.minLength(3)]],

        whatsapp:['',[ Validators.minLength(3)]],
        facebook:['',[ Validators.minLength(3)]],
        ubicacion:['',[ Validators.minLength(3)]],
        informacion:['',[ Validators.minLength(3)]],
        tokenlogin:['',[ Validators.minLength(3)]]
    })
    this.formu.controls['id'].disable();
    this.formu.controls['tokenlogin'].disable();
  }
  editaPerfil(){

    const edita = {
      id:this.formu.get("id").value,
       perfil:this.formu.get("perfil").value,
      nombre: this.formu.get("nombre").value,
       edad:this.formu.get("edad").value,
       titulo:this.formu.get("titulo").value,
       lenguajes:this.formu.get("lenguajes").value,
       nacimiento:this.formu.get("nacimiento").value,
       vive:this.formu.get("vive").value,

       whatsapp:this.formu.get("whatsapp").value,
       facebook:this.formu.get("facebook").value,
       ubicacion:this.formu.get("ubicacion").value,
       informacion:this.formu.get("informacion").value,
       tokenlogin:this.formu.get("tokenlogin").value
    }

   this._services.perfilUpdated(edita,this.formu.get("id").value)
  }
  save(){
    this._services.Getconsulta('perfil').subscribe(data=>data)
  }
}
