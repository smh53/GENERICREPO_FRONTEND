import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SectionModule } from '../section/section.module';
import { MasterModule } from '../master/master.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SectionModule,
    MasterModule
    
  ]
})
export class HomeModule { }
