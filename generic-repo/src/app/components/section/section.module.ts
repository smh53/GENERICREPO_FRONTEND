import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSectionComponent } from './add-section/add-section.component';
import { ListSectionComponent } from './list-section/list-section.component';



@NgModule({
  declarations: [
    AddSectionComponent,
    ListSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionModule { }
