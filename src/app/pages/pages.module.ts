import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { IconsComponent } from './icons/icons.component';
import { FileComponent } from './file/file.component';
import { GuideComponent } from './guide/guide.component';
import { StepsGuideModule } from 'ng-devui/steps-guide';
import { PageComponent } from './permission/page/page.component';
import { RoleComponent } from './permission/role/role.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { AvatarUploadComponent } from './avatar-upload/avatar-upload.component';
import { StickyComponent } from './sticky/sticky.component';
import { PtableComponent } from './ptable/ptable.component';

import { PermissionDirective } from '../@core/directive/permission/permission.directive';
import { SharedModule } from '../@shared/shared.module';
const PAGES_COMPONENTS = [
  PagenotfoundComponent, DashboardComponent,
  FileComponent, GuideComponent, PageComponent,
  RoleComponent, IconsComponent, PermissionDirective,
  RichTextComponent, AvatarUploadComponent,
  StickyComponent, PtableComponent, ];

@NgModule({
  declarations: [
    PagesComponent,
    ...PAGES_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    DevUIModule,

    PagesRoutingModule,
    StepsGuideModule,
    SharedModule
  ]
})
export class PagesModule { }
