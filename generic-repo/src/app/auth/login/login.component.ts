import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthToken, NbLoginComponent, NbTokenLocalStorage, NbTokenStorage } from '@nebular/auth';
import { LoginDto } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public submitted: boolean;
  
 
  constructor(private _authService: AuthService,private router: Router,private _tokenStorage: NbTokenStorage, private authService: NbAuthService) {
   
    
  }
  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
        
      }
      return;
      
    }
   

    console.log(form.value)
    let login = <LoginDto>{};
    login = Object.assign({}, form.value);
    
    this._authService.login(login).subscribe(response => { 
      this.authService.authenticate('username',{userName: login.userName, password: login.password}).subscribe(response => {
        response.isSuccess() ? this.router.navigate(['/home'])
        : null;
      })
      

    });
    
  }

}
