import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { JoinPartyComponent } from './join-party.component';
import { CodePageComponent } from './code-page/code-page.component';
import { ThemeShowComponent } from './theme-show/theme-show.component';



@NgModule({
  declarations: [
    JoinPartyComponent,
    CodePageComponent,
    ThemeShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    JoinPartyComponent
  ]
})
export class JoinThemeModule { }
