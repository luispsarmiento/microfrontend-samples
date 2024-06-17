import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, EventEmitter, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter-loader',
  template: ''
})
export class CounterLoaderComponent implements OnInit {
  constructor(
    private vcref: ViewContainerRef
  ){

  }

  async ngOnInit() {
    /*const { CounterComponent } = await loadRemoteModule({
      remoteEntry: 'https://turbo-space-fiesta-54g9x7wqjp3p7gr-8080.app.github.dev/js/remoteEntry.js',
      remoteName: 'blazormodule',
      exposedModule: './Counter',
    });

    const componentRef: ComponentRef<{
      startFromId: number;
      onDataLoaded: EventEmitter<any>;
    }> = this.vcref.createComponent(CounterComponent);

    componentRef.instance.startFromId = 810;
    componentRef.instance.onDataLoaded.subscribe(evt => console.log("Counter Loaded"));*/
  }
}
