import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { DatosItem, FileItem } from '../config/models/file-item';
import { finalize, map } from 'rxjs/operators';

import { AngularFirestore} from '@angular/fire/firestore';
import {HttpClient, JsonpClientBackend} from '@angular/common/http'
import { FormModelsInt } from '../config/models/Form.Model';
import { throwError } from 'rxjs';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})



export class FirebaseService {

 rutas = 'img'

  constructor(public firabase:AngularFireAuth,
    public frbs : AngularFireStorage,
    public db: AngularFirestore,
    public http:HttpClient,

   ) { }
   guardaimagehabilidaes(datos:any,image:FileItem[]){
    const  carpeta_images = `${this.rutas}/${datos.selecion}`
    for  (const items of image) {
        items.estasubliendo = true
        const nameIm = items.nombreArchivo
        const filePath = this.generateFileName(items.nombreArchivo,carpeta_images);
        const fires = this.frbs.ref(filePath)
        const task = this.frbs.upload(filePath,items.archivo)

        items.progreso = task.percentageChanges()


        task.snapshotChanges().pipe(finalize(()=>{
          task.percentageChanges()

          items.estasubliendo = false

        })).subscribe((data:any)=>{


        items.progreso = (data?.bytesTransferred/data?.totalBytes)*100

        if(items.progreso >99){
          this.frbs.storage.refFromURL('gs://portafolio-b3eb8.appspot.com')
          .child(filePath).getDownloadURL()
          .then(data=>{
               this.databaseHabilidades(datos,data,filePath,items.nombreArchivo,nameIm)
               .then(data=>data)
              }
          )

          }
        })

    }

    }

    databaseHabilidades(datos:any,data:any,nombreArchivo:any,imga:any,nameIm){
      const ids = this.idnumero()
      return   this.db.collection(datos.selecion).add({
                id:ids,
                nombreImages:imga,
                trabajos:datos.nombreimg,
                descripcion:datos.descripcion,
                selecion:datos.selecion,
                url:data,
                nombreArchivo:nombreArchivo,
                nombreimg:nameIm,
                titulo:datos.titulo,
                tecnologia:datos.tecnologia,
                subhijo:datos.subhijo,
                color:datos.color,

    })
  }
 async  ImageEliminar(id,at,path){
    await this.frbs.ref("").child(at).delete()
    return  this.db.collection(path).ref.where("id","==",id)
    .get().then(data=>data.forEach(eleme=>eleme.ref.delete()))
  }
  Getconsulta(doc:any){
    return   this.db.collection(doc).valueChanges()
  }
  GetconsultaDatos(doc:any){
    return   this.db.collection(doc).valueChanges()
    .pipe(map(data=>data.map((data:any)=>{
      return {
        edad:data.edad,
        facebook:data.facebook,
        informacion:data.informacion,
        lenguajes:data.lenguajes,
        nacimiento:data.nacimiento,
        nombre:data.nombre,
        perfil:data.perfil,
        titulo:data.titulo,
        ubicacion:data.ubicacion,
        vive: data.vive,
        whatsapp:data.whatsapp
      }

    })))
  }
  GetImagenes(doc:any){
    return   this.db.collection<DatosItem>(doc).valueChanges()
  }

   consultaUpdated(data,id,doc){

    return  this.db.collection(doc).ref.where("id","==",id)
    .get().then(dat=>dat.forEach(eleme=>eleme.ref.update(data)))
  }
   consultaEliminar(id,doc){

    return  this.db.collection(doc).ref.where("id","==",id)
    .get().then(data=>data.forEach(eleme=>eleme.ref.delete()))
  }

  consulta(item:DatosItem){

    return  this.db.collection(item.selecion).ref.where("id","==",item.id)
    .get().catch(data=>data)
  }


   private generateFileName(name: string,carpeta_images:string): string {
    return `${carpeta_images}/${new Date().getTime()}_${name}`;
  }



    guardaimage(datos:any,image:FileItem[]){
      const  carpeta_images = `${this.rutas}/${datos.selecion}`
      for  (const items of image) {
          items.estasubliendo = true

          const filePath = this.generateFileName(items.nombreArchivo,carpeta_images);
          const fires = this.frbs.ref(filePath)
          const task = this.frbs.upload(filePath,items.archivo)

          items.progreso = task.percentageChanges()


          task.snapshotChanges().pipe(finalize(()=>{
            task.percentageChanges()

            items.estasubliendo = false

          })).subscribe((data:any)=>{


          items.progreso = (data?.bytesTransferred/data?.totalBytes)*100

          if(items.progreso >99){
            this.frbs.storage.refFromURL('gs://portafolio-b3eb8.appspot.com')
            .child(filePath).getDownloadURL()
            .then(data=>{
                 this.database(datos,data,filePath,items.nombreArchivo)
                 .then(data=>data)
                }
            )

            }
          })

      }

      }
      database(datos:any,data:any,nombreArchivo:any,imga:any){
        const ids = this.idnumero()
        return   this.db.collection(datos.selecion).add({
                  id:ids,
                  nombreImages:imga,
                  trabajos:datos.nombreimg,
                  descripcion:datos.descripcion,
                  selecion:datos.selecion,
                  url:data,
                  nombreArchivo:nombreArchivo
      })
    }


    formulario(datos:FormModelsInt){
      const   clock = new Date()
     const fechas =  ` ${clock.getDate()}/ ${clock.getMonth()+1}/${clock.getFullYear()} - ${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`
      const ids = this.idnumero()
      return  this.db.collection('formulario').add({
        id:ids,
        name:datos.name,
        email:datos.email,
        phone:datos.phone,
        descripcion:datos.descripcion,
        fecha: fechas,
        active: false,
        espera:false
      }).then(datos=> {
      return  true
      }
      ).catch(err=>{this.capturaError(err)
        return true
      })
    }

    private  capturaError(dta:any){
        this.db.collection('errors').add({
        fecha: new Date(),
        Error:"Error Usuario",
        Descripcion: JSON.parse(dta)
      })
    }


    idnumero():string{
     const fecha = new Date().getTime()
     const finas =  Math.floor( Math.random() * (9999 - 1000) + 0).toString()
      return `${  Math.floor( Math.random() * (9999999 - 1000000) + 0).toString() + fecha.toString() +finas}`
    }



    perfilCrear(data:any){
      const ids = this.idnumero()
      return  this.db.collection('perfil').add({
        id:ids,
        perfil:data.perfil,
        nombre:data.nombre,
        edad:data.edad,
        titulo:data.titulo,
        lenguajes:data.lenguajes,
        nacimiento:data.nacimiento,
        vive:data.vive
      }).then(datos=> {
      return  true
      }
      ).catch(err=>{this.capturaError(err)
        return true
      })
    }

    perfilUpdated(data,id){

      return  this.db.collection("perfil").ref.where("id","==",id)
      .get().then(dat=>dat.forEach(eleme=>eleme.ref.update(data)))
    }

   async tokenvalido(token){

      return  await this.db.collection("seguridad").ref.where("idsecurity","==",token).get()

    }
}


