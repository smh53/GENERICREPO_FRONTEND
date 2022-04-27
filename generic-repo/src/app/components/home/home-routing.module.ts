import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSectionComponent } from '../section/list-section/list-section.component';

const routes: Routes = [
  { path: 'list-section',component: ListSectionComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
