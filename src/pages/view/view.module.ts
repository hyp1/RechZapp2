import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';
import { AuthProvider } from '../../providers/auth/auth';
@NgModule({
  declarations: [
    ViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPage),
  ],
  providers: [AuthProvider]
})

export class ViewPageModule {}
