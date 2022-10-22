import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService, NbTokenStorage } from '@nebular/auth';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/models/listResponseModel';
import { LoginDto, RegisterDto, ResetPasswordDto } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient,
    private _tokenStorage: NbTokenStorage,
    private _authService: NbAuthService
  ) { }

  getAllRoles() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        
      }),
    };
    return this._httpClient.get<ListResponseModel<string>>(`${environment.authUrl}GetAllRoles`, httpOptions)
  }

  resgistration(registerDto: RegisterDto) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
         
      }),
    };
    return this._httpClient.post<RegisterDto>(`${environment.authUrl}Registration`, registerDto, httpOptions);
  }

  login(loginDto: LoginDto) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',        
      }),
    };
    return this._httpClient.post<LoginDto>(`${environment.authUrl}Login`, loginDto, httpOptions);
  }

  resetPassword(resetPasswordDto: ResetPasswordDto) {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
         
      }),
    };
    return this._httpClient.post<RegisterDto>(`${environment.authUrl}ResetPassword`, resetPasswordDto, httpOptions);
  }
}
