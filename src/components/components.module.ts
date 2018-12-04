import { NgModule } from '@angular/core';
import { Drupal7LoginComponent } from './drupal7-login/drupal7-login';
import { UploadComponent } from './upload/upload';
import { CommentComponent } from './comment/comment';
import { BookmarkComponent } from './bookmark/bookmark';

@NgModule({
	declarations: [
    Drupal7LoginComponent,
    UploadComponent,
    CommentComponent,
    BookmarkComponent],
	imports: [],
	exports: [
    Drupal7LoginComponent,
    UploadComponent,
    CommentComponent,
    BookmarkComponent]
})
export class ComponentsModule {}
