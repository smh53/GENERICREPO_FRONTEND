import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbAlertModule,
    NbInputModule,
    NbAuthModule,
    FormsModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbCardModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ]
})
export class AuthModule { }
