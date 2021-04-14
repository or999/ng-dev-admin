import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevUIModule } from 'ng-devui';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { IconComponent } from './shareComponent/icon/icon.component';
import { PermissionDirective } from './directive/permission/permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    // PermissionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DevUIModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
