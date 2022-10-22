import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { NbAuthService, NbTokenStorage } from '@nebular/auth';
import { NotificationService } from 'src/services/notification.service';
import { HttpError } from 'src/models/httperrors';



@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private _authService: NbAuthService,private _tokenStorage: NbTokenStorage, private _notificationService: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    if (this._authService.isAuthenticated()) {
        request = this.setHeader(request, this._tokenStorage.get()['token']);
      }
    

    return next.handle(request).pipe(
     
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
           console.log('Client side error:');
           errorMsg = `Error: ${error.error.message}`;
        } else {
           console.log('Server side error:');
           errorMsg = `Error Code: ${error.status}`;
           switch(error.status) {
             case HttpError.Forbidden:
               this._notificationService.notifyError("UNAUTHORIZED!", error.error.title);
               break;
             case HttpError.BadRequest:
              this._notificationService.notifyError("BAD DATA!", error.error.title);
              break;
             case HttpError.InternalServerError:
               this._notificationService.notifyError("FATAL ERROR!",error.error.title)
               break;
             case HttpError.NotFound:
                this._notificationService.notifyError("PAGE NOT FOUND!",error.error.title)
                break;
             case HttpError.TimeOut:
               this._notificationService.notifyError("REQUEST TIME OUT!",error.error.title)
               break;
             case HttpError.Conflict:
                this._notificationService.notifyError("CONFLICT DETECTED!",error.error.title)
                break;
           }
        }
        console.log(errorMsg);
        return throwError(errorMsg);
     })
    );
  }

  
  private setHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return request;
  }
}
