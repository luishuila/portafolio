import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private firabase:AuthService,private _router: Router) {

   }

 async onLogin(){
  const { email, password } = this.loginForm.value;
 const datos= await this.firabase.login(email, password )

   if(datos){
  this._router.navigateByUrl('pages')
   }


  }
  ngOnInit(): void {
  }

}
