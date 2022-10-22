import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from 'src/app/auth/registration/registration.component';
import { AuthGuard } from 'src/services/auth-guard.service';
import { ListSectionComponent } from '../section/list-section/list-section.component';

const routes: Routes = [
  { path: 'list-section',canActivate: [AuthGuard],component: ListSectionComponent },
  { path: 'resgistration',canActivate: [AuthGuard],component: RegistrationComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
