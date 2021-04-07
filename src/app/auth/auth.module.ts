import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { DevUIModule } from 'ng-devui';


@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DevUIModule
  ]
})
export class AuthModule { }
