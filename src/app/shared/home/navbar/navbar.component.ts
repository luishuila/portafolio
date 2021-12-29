import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menux = [
    {key:'Selnavbar', nombre:"INICIO"},
    {key:'SelPerfil'  , nombre:"PERFIL" },
    {key:'EXPERIENCIA'  , nombre:"EXPERIENCIA" },
    {key:'SelProyect',  nombre:"PROYECTOS" },
   {key: 'SelHabilidades',nombre:"HABILIDADES"},
    {key: 'SelPasatiempo',nombre:"PASATIEMPOS"},
    {key: 'SelFormu',nombre:"CONTACTOS"},
  ]
  varibale:boolean = false
  styilos:boolean = false
  constructor(@Inject(DOCUMENT)private documento:any) {
  }
  ngOnInit(): void {

    const links = document.querySelectorAll(".navbarul ul a");


  }
  menu(){
    this.styilos = !this.styilos

  }
  doSomethingOnInternalScroll($event:any):any{
    if($event){

      this.varibale = true
    }else{
      this.varibale = false
    }


  }
  scroll(dta:any){

  }
  home(Texto:any){


    document.getElementById(Texto).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    const arriba =Math.floor( document.getElementById(Texto).getBoundingClientRect().top + document.documentElement.scrollTop)




  }
}
