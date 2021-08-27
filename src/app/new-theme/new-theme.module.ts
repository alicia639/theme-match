import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { CodeShowComponent } from './code-show/code-show.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeListComponent,
    CodeShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewThemeComponent
  ]
})
export class NewThemeModule { }
