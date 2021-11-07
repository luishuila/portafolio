
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';






const routes: Routes = [

      {path:'pages', component:PagesComponent},
      {path:'img', component:ImagenesComponent},
      {path:'perfil', component:PerfilComponent},
      {path:'contactos', component:ContactosComponent},
      {path:'habilidades', component:HabilidadesComponent}
    ]


@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
