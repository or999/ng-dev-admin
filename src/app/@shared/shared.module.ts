import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { TableComponent } from './components/table/table.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { TinymceComponent } from './components/tinymce/tinymce.component';
import { FormsModule } from '@angular/forms';
import { DevUIModule } from 'ng-devui';
import { EditorModule } from '@tinymce/tinymce-angular';
import { EchartsComponent } from './components/echarts/echarts.component';



@NgModule({
  declarations: [IconComponent, TableComponent, TableFormComponent, TinymceComponent, EchartsComponent],
  imports: [
    CommonModule,
    FormsModule,
    DevUIModule,
    EditorModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    DevUIModule,
    IconComponent, TableComponent, TableFormComponent, TinymceComponent, EchartsComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
