import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSectionComponent } from './add-section/add-section.component';
import { ListSectionComponent } from './list-section/list-section.component';
import { AgGridModule } from 'ag-grid-angular';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    AddSectionComponent,
    ListSectionComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    NbCardModule
  ]
})
export class SectionModule { }
