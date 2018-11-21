import { Component,Input } from '@angular/core';

/**
 * Generated class for the AsyncPromisePipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'async-promise-pipe',
  templateUrl: `async-promise-pipe.html`
})

export class AsyncPromisePipeComponent {
  greeting: Promise<string>|null = null;
  arrived: boolean = false;
 
  private resolve: Function|null = null;
  @Input() name: string;
  @Input() endpoint: string;
  @Input() host: string;

  constructor() { this.reset();

  }
  reset() {

    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }
 
  clicked() {
    alert(this.host);
    console.log("name:"+this.name);
    console.log("host:"+this.host);
    console.log("endpoint:"+this.endpoint);
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }
}