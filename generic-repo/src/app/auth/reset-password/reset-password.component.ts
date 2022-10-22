import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordDto } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public submitted: boolean;
  public token: string;
  public email: string;
  constructor(
    private _authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    }
   
  
  resetPassword(form: NgForm) {
    let resetPassword = <ResetPasswordDto>{};
    resetPassword = Object.assign({}, form.value);

    this._authService.resetPassword(resetPassword).subscribe(response => {
      console.log(response);
    })
  }

}
