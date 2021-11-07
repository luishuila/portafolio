import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './config/guard/login.guard';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [

  {path:'pages',redirectTo:'inicio',pathMatch:'full'},
  { path: 'inicio', component: PagesComponent,canActivate : [LoginGuard],
  loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {path:'',component:SharedComponent },
  {path:'**',component:SharedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
