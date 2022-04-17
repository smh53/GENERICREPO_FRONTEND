import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../master/header/header.component';
import { AddSectionComponent } from '../section/add-section/add-section.component';
import { ListSectionComponent } from '../section/list-section/list-section.component';

const routes: Routes = [
  { path: 'list-section',component: ListSectionComponent },
  { path: 'add-section', component: AddSectionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
