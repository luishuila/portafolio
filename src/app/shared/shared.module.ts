import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AsideComponent } from './home/aside/aside.component';

import { FooterComponent } from './home/footer/footer.component';
import { DomhtmlDirective } from './directives/domhtml.directive';

import { GallerytresDirective } from './directives/gallerytres.directive';

import { TextocentradoDirective } from './directives/textocentrado.directive';
import { ImagenesComponent } from './component/imagenes/imagenes.component';
import { IconosComponent } from './component/iconos/iconos.component';
import { SetcustomDirective } from './directives/setcustom.directive';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViajesComponent } from './component/viajes/viajes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectComponent } from './component/proyect/proyect.component';
import { MidatosComponent } from './component/midatos/midatos.component';
import { FormComponent } from './component/form/form.component';
import { ScrollAbajoDirective } from './directives/scroll-abajo.directive';

import { SharedRoutingModule } from './shared.routing.module';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';
import { LoginComponent } from './login/login.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';



const componetes = [
  SharedComponent,
  HeaderComponent,
  MainComponent,
  NavbarComponent,
  AsideComponent,
  ExperienciaComponent,
  FooterComponent, DomhtmlDirective,
     GallerytresDirective,

      TextocentradoDirective,
       ImagenesComponent,
       IconosComponent,
        SetcustomDirective,
        ViajesComponent,
        ProyectComponent,
        MidatosComponent,
        FormComponent,
        LoginComponent
]

@NgModule({
  declarations: [componetes, ScrollAbajoDirective
  ],
  imports: [


    CommonModule,
    IvyCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    NgxSmoothScrollModule
  ],
  exports:[
    componetes
  ],

})
export class SharedModule { }
