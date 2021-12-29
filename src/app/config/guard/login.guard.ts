import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, async } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _router: Router,private firabase:AuthService){

  }
 async canActivate() {
  const data =  await this.garndatos()

  if(data != null){
    if( localStorage.getItem('token') == data  ){
      return true
    }else{
     return this._router.navigateByUrl('/')
    }
  }
  return this._router.navigateByUrl('/')
}

async garndatos ()
{
  const data =  await this.firabase.token().then(data => data)
  return data
}

}
