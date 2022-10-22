import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { payloadHelper } from 'src/app/helpers/payloadHelper';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {
  public user: any;
  constructor(private _authService: NbAuthService,private router: Router) { }

  ngOnInit(): void {

    
    this._authService.logout('username').subscribe(response=> {
      console.log(response);
    });

    
    this.router.navigate(['auth/login'])

  }

}
