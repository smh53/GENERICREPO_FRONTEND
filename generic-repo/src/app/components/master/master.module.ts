import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbActionsModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbLayoutModule,
    NbMenuModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSelectModule,
    NbUserModule,
    NbIconModule

   
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class MasterModule { }
