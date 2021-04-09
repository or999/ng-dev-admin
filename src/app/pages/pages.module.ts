import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../shareComponent/icon/icon.component';


@NgModule({
  declarations: [PagesComponent, PagenotfoundComponent, DashboardComponent, IconComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DevUIModule,
    FormsModule
  ]
})
export class PagesModule { }
