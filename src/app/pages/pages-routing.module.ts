import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth/auth.guard';
import { PermissionGuard } from '../guard/permission/permission.guard';
import { IconsComponent } from './icons/icons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileComponent } from './file/file.component';
import { GuideComponent } from './guide/guide.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages.component';
import { PageComponent } from './permission/page/page.component';
import { RoleComponent } from './permission/role/role.component';
import { RichTextComponent } from './rich-text/rich-text.component';

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
              }
            ]

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
