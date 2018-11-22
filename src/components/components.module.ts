import { NgModule } from '@angular/core';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe';
import { Drupal7LoginComponent } from './drupal7-login/drupal7-login';
import { UploadComponent } from './upload/upload';
@NgModule({
	declarations: [AsyncPromisePipeComponent,
    AsyncObservablePipeComponent,
    Drupal7LoginComponent,
    UploadComponent],
	imports: [],
	exports: [AsyncPromisePipeComponent,
    AsyncObservablePipeComponent,
    Drupal7LoginComponent,
    UploadComponent]
})
export class ComponentsModule {}
