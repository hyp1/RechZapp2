import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';
import { AuthProvider } from '../../providers/auth/auth';
import { CommentComponent } from '../../components/comment/comment';
@NgModule({
  declarations: [
    ViewPage,
    CommentComponent
  ],
  imports: [
    IonicPageModule.forChild(ViewPage),
  ],
  providers: [AuthProvider,CommentComponent]
})

export class ViewPageModule {}
