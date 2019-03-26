import { NgModule } from '@angular/core';
import { Drupal7LoginComponent } from './drupal7-login/drupal7-login';
import { UploadComponent } from './upload/upload';
import { CommentComponent } from './comment/comment';
import { BookmarkComponent } from './bookmark/bookmark';
import { BereichComponent } from './bereich/bereich';
import { BannersComponent } from './banners/banners';

@NgModule({
	declarations: [
    Drupal7LoginComponent,
    UploadComponent,
    CommentComponent,
    BookmarkComponent,
    BereichComponent,
    BannersComponent],
	imports: [],
	exports: [
    Drupal7LoginComponent,
    UploadComponent,
    CommentComponent,
    BookmarkComponent,
    BereichComponent,
    BannersComponent]
})
export class ComponentsModule {}