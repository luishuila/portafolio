import { async } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,
    public afAuth: AngularFireAuth, private afs: AngularFirestore) { }

async  login(email: string, password: string)
  {
    const id:string = "PniSxTrUKvVEabbkMQ2Wr5hIqXa2"
    const {user} = await this.afAuth.signInWithEmailAndPassword(email,password)

   const adat = await  this.afAuth.idToken.subscribe(data=> {
    localStorage.setItem('token', data) })

  if(adat){
return true;
  }
  return false
  }

  registra(email: string, password: string)
  {

    return this.afAuth.authState.subscribe(data=>{data})
   }
   token()
  {
    return new Promise(resolve =>{
     return   this.afAuth.idToken.subscribe(data=>{
      return  resolve(data)
      })
    })



   }

  cerra(){
   return this.afAuth.signOut().then(datos=>{
      localStorage.clear();
      localStorage.clear();
      return this._router.navigateByUrl('/')
    }).catch(data=>{
      localStorage.clear();
      localStorage.clear();
      return this._router.navigateByUrl('/')
    })

  }

}

