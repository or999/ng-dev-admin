import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    DevUIModule
  ]
})
export class AuthModule { }
