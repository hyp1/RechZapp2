import { NgModule } from '@angular/core';
import { Drupal7LoginComponent } from './drupal7-login/drupal7-login';
import { UploadComponent } from './upload/upload';
import { CommentComponent } from './comment/comment';
import { BookmarkComponent } from './bookmark/bookmark';
import { BereichComponent } from './bereich/bereich';

@NgModule({
	declarations: [
    Drupal7LoginComponent,
    UploadComponent,
    CommentComponent,
    BookmarkComponent,
    BereichComponent],
	imports: [],
	exports: [
    Drupal7LoginComponent,
    UploadComponent,
    CommentComponent,
    BookmarkComponent,
    BereichComponent]
})
export class ComponentsModule {}