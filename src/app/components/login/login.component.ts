import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  isLoading:boolean=false;
  errMsg:string='';
    loginForm: FormGroup = new FormGroup({
      email:new FormControl ('', [Validators.required , Validators.email]),
      password : new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
    })
    handleform():void{
  const userData =this.loginForm.value
  this.isLoading=true;
      if(this.loginForm.valid ===true){
        this._AuthService.login(userData).subscribe({
          next:(respons)=>{
            if(respons.message=="success"){
              console.log(respons);
              localStorage.setItem('etoken',respons.token)
              this._AuthService.decodeUser();
              this.isLoading=false;
              this._Router.navigate(['/home'])
            }
          },
          error:(err)=>{
            this.errMsg= err.error.message;
            this.isLoading=false;

          }
        });
      }

    }
}
