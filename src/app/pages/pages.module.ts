import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../shareComponent/icon/icon.component';
import { IconsComponent } from './icons/icons.component';
import { FileComponent } from './file/file.component';
import { GuideComponent } from './guide/guide.component';
import { StepsGuideModule } from 'ng-devui/steps-guide';
import { PageComponent } from './permission/page/page.component';
import { RoleComponent } from './permission/role/role.component';
import { PermissionDirective } from '../directive/permission/permission.directive';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextComponent } from './rich-text/rich-text.component';
import { TinymceComponent } from '../shareComponent/tinymce/tinymce.component';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [PagesComponent, PagenotfoundComponent, DashboardComponent, IconComponent,
    FileComponent, GuideComponent, PageComponent, RoleComponent, IconsComponent,
    PermissionDirective,
    RichTextComponent, TinymceComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DevUIModule,
    FormsModule,
    StepsGuideModule,
    EditorModule
  ]
})
export class PagesModule { }
