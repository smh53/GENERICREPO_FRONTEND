import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
