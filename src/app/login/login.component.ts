import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    nombre:new FormControl(''),
    clave:new FormControl('')
  })

  constructor(
    private loginService:LoginService,
    private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.loginForm.getRawValue())
      .subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/home'])
      })
  }
}
