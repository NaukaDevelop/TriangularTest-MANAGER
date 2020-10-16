import { Injectable, EventEmitter, Output } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root',
})
export class NavService {


  @Output() aClickedEvent = new EventEmitter<string>();
  private drawer: MatDrawer;

AClicked(msg: string) {
  this.aClickedEvent.emit(msg);
}


setDrawer(drawer: MatDrawer) {
  console.log('drawer',drawer);
    this.drawer = drawer;
}

toggle(): void {
  console.log('toogle');
    this.drawer.toggle();
}

}
