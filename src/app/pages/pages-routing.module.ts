import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileComponent } from './file/file.component';
import { GuideComponent } from './guide/guide.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages.component';
import { PageComponent } from './permission/page/page.component';
import { RoleComponent } from './permission/role/role.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { AvatarUploadComponent } from './avatar-upload/avatar-upload.component';
import { StickyComponent } from './sticky/sticky.component';
import { PtableComponent } from './ptable/ptable.component';
import { AuthGuard } from '../@core/guard/auth/auth.guard';
import { PermissionGuard } from '../@core/guard/permission/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'file',
            component: FileComponent
          },
          {
            path: 'guide',
            component: GuideComponent
          },
          {
            path: 'permission',
            children: [
              {
                path: 'pagePermission',
                component: PageComponent,
              },
              {
                path: 'rolePermission',
                component: RoleComponent,
                canActivate: [PermissionGuard],
                canLoad: [PermissionGuard]
              },
            ]
          },
          {
            path: 'icons',
            component: IconsComponent
          },
          {
            path: '',
            children: [
              {
                path: 'richtext',
                component: RichTextComponent
              },
              {
                path: 'avatarupload',
                component: AvatarUploadComponent
              },
              {
                path: 'sticky',
                component: StickyComponent
              }
            ]

          },
          {
            path: 'pages-table',
            component: PtableComponent
          },
          {
            path: '**',
            component: PagenotfoundComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
