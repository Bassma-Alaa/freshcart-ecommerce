import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgotpassService } from 'src/app/core/services/forgotpass.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  constructor(private _ForgotpassService:ForgotpassService , private _Router:Router){}
step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string='';
userMsg:string='';

ForgotForm:FormGroup=new FormGroup({
  email:new FormControl('')
});
resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl('')
});
resetPassword:FormGroup=new FormGroup({
  newPassword:new FormControl('')
});

forgotPassword():void{
  let userEmail = this.ForgotForm.value;
  this.email=userEmail.email;
  this._ForgotpassService.forgotPassword(userEmail).subscribe({
  next:(responce)=>{
    console.log(responce);
    this.userMsg=responce.message
    this.step1=false;
    this.step2=true;
  },
  error:(err)=>{
    this.userMsg =err.error.message;
  }
})
};

resetCode():void{
  let resetCode = this.resetCodeForm.value;
  this._ForgotpassService.resetCode(resetCode).subscribe({
    next:(responce)=>{
      console.log(responce);
      this.userMsg=responce.status;
      this.step2=false;
      this.step3=true;
    },
    error:(err) => {
      this.userMsg=err.error.message;
    }
  })
};

newPassword():void{
let resetForm =this.resetPassword.value;
resetForm.email=this.email;
this._ForgotpassService.resetPassword(resetForm).subscribe({
  next:(responce)=> {
    if(responce.token){
      localStorage.setItem("Token", responce.token);
      this._Router.navigate(['/home'])
    }
  },
  error:(err)=>{
    this.userMsg = err.error.message;
  }
})
};
}


