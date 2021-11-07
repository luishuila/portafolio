import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulosModule } from './modulos/modulos.module';

import { SharedModule } from './shared/shared.module';


import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {  AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { PagesModule } from './pages/pages.module';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollAbajoDirective } from './directives/scroll-abajo.directive';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';





 
@NgModule({
  declarations: [
    AppComponent,
    ScrollAbajoDirective,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModulosModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    PagesModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgbModule,
 
    NgxSmoothScrollModule
  ],
  providers: [
  
    { provide: BUCKET, useValue: 'gs://portafolio-b3eb8.appspot.com' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
