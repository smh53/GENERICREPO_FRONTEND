import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSectionComponent } from './list-section/list-section.component';
import { AgGridModule } from 'ag-grid-angular';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { RendererActionsComponent } from './renderer-actions/renderer-actions.component';





@NgModule({
  declarations: [
    ListSectionComponent,
    RendererActionsComponent,

  ],
  imports: [
    CommonModule,
    AgGridModule,
    NbCardModule,
    NbButtonModule,
   
  ]
})
export class SectionModule { }
