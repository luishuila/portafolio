
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from 'src/app/services/firebase.service';

import { FormModels } from 'src/app/config/models/Form.Model';
import { FormModelsInt } from './../../../config/models/Form.Model';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent  {
  loginentr = false
  robo:String = ""
  formu: FormGroup
  desactivabtn:Boolean = false
  error:Boolean = false
  letra:String = ""
  capchar:boolean = false
  constructor(public fb:FormBuilder, private service:FirebaseService,
    ) {
     this.nosoyRobor()
    this.formu =  this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      email:['',[Validators.required, Validators.minLength(4),Validators.email,Validators.maxLength(30),Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      descripcion: ['',[Validators.required, Validators.minLength(10)]],
      phone:[null,[Validators.required,Validators.min(1000000),Validators.max(999999999999999999),Validators.pattern("^[-+]?[0-9]+$") ]],
      recaptchaReactive: ["", Validators.required],
    },{ validators:this.soniguales('recaptchaReactive')})



  }


  soniguales(campo:string){
    return (group:FormGroup)=>{
      let camp = group.controls[campo].value

      if(camp === this.robo){
        return null
      }
      return {
        soniguales:true
      }
    }
  }
  private nosoyRobor(){
    const robo =
    [
      ["A","B","C","D","E","F","G","H","I","J","K","L","N","M","R","O","P","Q","R","S","T","U","W","V","X","Y","Z"],
      ["a","b","c","d","e","f","g","h","i","j","k","l","n","m","r","p","q","r","o","s","t","u","w","V","x","Y","Z"],
    ]
    function data(){
      const datos = Math.floor( Math.random() * (robo.length - 0) + 0);
      const data = Math.floor( Math.random() * (robo[datos].length - 0) + 0);
      return robo[datos][data]
  }

    function datas(){
      let datos1 = data().toString()
      let datos2 = data().toString()
      let datos3 = data().toString()
      let datos4 = data().toString()
      let datos5 = data().toString()
      return  datos1+datos2+datos3+datos4+datos5
    }
    const robos =  datas()
    this.robo = robos;

    var divisiones = robos.split("");
    this.letra =  divisiones.join(" ")



  }

  getError(element:string){
    if( this.formu.get(element).invalid && this.formu.get(element).touched){

      if( this.formu.get(element).errors.email){
        return `requiere se un email `
      }
      if( this.formu.get(element).errors.pattern){
        return `el campor no es valido`
      }
        if( this.formu.get(element).errors.required){
          return "el campo es obligatorio"
        }

        if( this.formu.get(element).errors.minlength){
          return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
        }
        if( this.formu.get(element).errors.maxlength){
          return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
        }
        if( this.formu.get(element).errors.pattern){
          return `comprueba que un email es válido`
        }
        if( this.formu.get(element).errors.pattern){
          return `comprueba que un email es válido`
        }


    }

    return "";
  }
  getErrornumero(element:string){

    if( this.formu.get(element).invalid && this.formu.get(element).touched){

      if( this.formu.get(element).errors.pattern){
        return `el campo no se permiten caracteres especiales`
      }

      if(this.formu.get(element).errors.min){
        return `el campo  se requiere un  mínimo para el Telefono `
      }
      if(this.formu.get(element).errors.max){
        return `el campo se requiere un máximo  para el Telefono `
      }
      if( this.formu.get(element).errors.minlength){
        return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
      }
      if( this.formu.get(element).errors.maxlength){
        return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
      }

      if( this.formu.get(element).errors.required){
        return "el campo es obligatorio"
      }

    }

    return "";
  }

  ngCHanger(stilo:any){
    this.capchar =  false
    if(stilo ==  this.robo){
      this.capchar =  false
    }
  }

 async sendEnvia(){
    this.desactivabtn = true
    const {empty} =  await this.service.tokenvalido(this.formu.get('recaptchaReactive').value)

    if(!empty){
      this.loginentr = true
      return
    }

    if( this.formu.get('recaptchaReactive').value != this.robo){
      this.nosoyRobor()
      this.capchar =  true
    }
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      this.desactivabtn = false

      return ;
    }



    const datos:FormModelsInt = new FormModels(
      this.formu.get('name').value, this.formu.get('email').value,
      this.formu.get('phone').value, this.formu.get('descripcion').value)


   this.service.formulario(datos).
   then(dato=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se Envío con Exíto',
      showConfirmButton: false,
      timer: 1500
    })

      this.formu.reset()
      this.nosoyRobor()
    this.desactivabtn = false

    }).
   catch(err=>
      {
      this.nosoyRobor()
      alert("Sucedió un error con el servido 500")
      this.desactivabtn = false
    })

  }



}
