import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PagesComponent } from './pages.component';
import { ModulosModule } from '../modulos/modulos.module';
import { ImagesDirective } from '../shared/directives/images.directive';
import { TonumberPipe } from '../config/pipes/tonumber.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CambiaestadoDirective } from './direct/cambiaestado.directive';
import { HabilidadesComponent } from './habilidades/habilidades.component';

const componentes = [
  ImagenesComponent,
  PagesComponent
]

@NgModule({
  declarations: [
    componentes,
    ImagesDirective,
    TonumberPipe,
    PerfilComponent,
    HomeComponent,
    ContactosComponent,
    CambiaestadoDirective,
    HabilidadesComponent
  ],
  imports: [
    CommonModule,
    ModulosModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ],
  exports:[
    componentes
  ],
})
export class PagesModule { }
