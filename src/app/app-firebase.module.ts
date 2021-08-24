import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';


@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule],
  exports: [AngularFireModule],
})
export class AppFirebaseModule { }
