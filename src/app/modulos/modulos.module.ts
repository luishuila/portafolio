import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const modulos = [
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFireStorageModule,
  AngularFirestoreModule,
]
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    modulos
  ],
  exports:[
    modulos
  ]
})
export class ModulosModule { }
