import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mgl-map
    [style]="'mapbox://styles/mapbox/streets-v9'"
    [zoom]="[9]"
    [center]="[-74.50, 40]"
    [fitBounds]="bounds"
  >
  </mgl-map>
  `,
  styles: [`
    :host {
      display: flex;
    }
    mgl-map {
      height: 100vh;
      width: 100vw;
    }
  `]
})
export class AppComponent {
  bounds: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.bounds = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
    }, 2000)
  }
}
