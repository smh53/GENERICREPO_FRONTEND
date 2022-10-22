import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth-guard.service';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
