import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidatosComponent } from './component/midatos/midatos.component';
import { ProyectComponent } from './component/proyect/proyect.component';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {path:'', component:SharedComponent , children:[
    {path:'awesomePart',component:MidatosComponent, pathMatch: 'full' },
    {path:'proyecto',component:ProyectComponent },
  ]},
  {path:'**',component:SharedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes )],

exports: [RouterModule]
})
export class SharedRoutingModule { }
