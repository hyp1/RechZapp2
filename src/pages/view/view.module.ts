import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';
import { AuthProvider } from '../../providers/auth/auth';
import { CommentComponent } from '../../components/comment/comment';
import { BookmarkComponent } from '../../components/bookmark/bookmark';

@NgModule({
  declarations: [
    ViewPage,
    CommentComponent,
    BookmarkComponent
  ],
  imports: [
    IonicPageModule.forChild(ViewPage),
  ],
  providers: [AuthProvider,CommentComponent,BookmarkComponent]
})

export class ViewPageModule {}
