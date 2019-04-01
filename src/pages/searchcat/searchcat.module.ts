import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchcatPage } from './searchcat';

@NgModule({
  declarations: [
    SearchcatPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchcatPage),
  ],
})
export class SearchcatPageModule {}
