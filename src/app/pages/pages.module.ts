import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../shareComponent/icon/icon.component';
import { FileComponent } from './file/file.component';
import { GuideComponent } from './guide/guide.component';
import { StepsGuideModule } from 'ng-devui/steps-guide';
import { PageComponent } from './permission/page/page.component';
import { RoleComponent } from './permission/role/role.component';
import { PermissionDirective } from '../directive/permission/permission.directive';

@NgModule({
  declarations: [PagesComponent, PagenotfoundComponent, DashboardComponent, IconComponent,
    FileComponent, GuideComponent, PageComponent, RoleComponent,
     PermissionDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DevUIModule,
    FormsModule,
    StepsGuideModule
  ]
})
export class PagesModule { }
