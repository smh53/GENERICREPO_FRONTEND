import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeTR from '@angular/common/locales/tr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbToastrModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { registerLocaleData } from '@angular/common';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from 'src/environments/environment';
import { AuthGuard } from 'src/services/auth-guard.service';
import { Interceptor } from './utilities/interceptor';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';


registerLocaleData(localeTR);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    RecaptchaModule,
    RecaptchaFormsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'username',
          baseEndpoint: environment.endPoint,
          login: {     
            requireValidToken: true,
            endpoint: 'api/auth/login',
            // redirect: {
            //   success: 'home',
            //   failure: null,
            // },         
          },
          // register: {          
          //   endpoint: 'api/auth/registration',
          //   redirect: {
              
          //     success: 'auth/login',
          //     failure: null,
          //   },
          // },
          logout: {
            endpoint: 'api/auth/logout',
          },
          token: {
            class: NbAuthJWTToken,
            key: 'data.token',
          },
      
        }),
      ],
      forms: {
      //   login: {
      //     redirectDelay: 1000, // delay before redirect after a successful login, while success message is shown to the user
      //     strategy: 'email',  // strategy id key.

      //     showMessages: {     // show/not show success/error messages
      //       success: true,
      //       error: true,
      //     },
      // },
      // register: {
      //   redirectDelay: 2000,
      //   showMessages: {
      //     success: true,
      //     error: true,
      //   },
        

      // },
    }
    }), 
    

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr-TR' }, 
    
    {provide:HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    AuthGuard,
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
