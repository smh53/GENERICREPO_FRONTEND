import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbRegisterComponent } from '@nebular/auth';
import { RegisterDto } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  token: string|undefined;
  public registerDto:RegisterDto;
  public submitted: boolean;
  public roles: string[] = [];

  constructor(
    private _authService: AuthService
  ) {
    this.token = undefined;
  }
  ngOnInit(): void {
   this._authService.getAllRoles().subscribe(response => {
     console.log(response);
     this.roles = response.data
   })

  }
  register(form: NgForm) {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
        
      }
      return;
      
    }
    console.debug(`Token [${this.token}] generated`);

    console.log(form.value)
    let register = <RegisterDto>{};
    register = Object.assign({}, form.value);
    
    this._authService.resgistration(register).subscribe(response => {
      console.log(response);
    })
  }
  
}
