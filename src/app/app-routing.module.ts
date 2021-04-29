import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@core/guard/auth/auth.guard';

const routes: Routes = [{
  path: 'pages',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  canLoad: [AuthGuard]
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},

{ path: '', redirectTo: 'pages', pathMatch: 'full' },
{ path: '**', redirectTo: 'pages' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
