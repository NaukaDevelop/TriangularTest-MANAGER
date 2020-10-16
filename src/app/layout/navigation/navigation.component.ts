import { Component, OnInit } from '@angular/core';

import { NavigationService } from './navigation.service';
import {NavigationObject} from './models/navigation.model'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationLocal: NavigationObject

  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationState.subscribe(data =>
      this.navigationLocal = data
    );
  }

  ngOnInit(): void {
    this.navigationLocal.opened = true
    this.navigationService.changeNavigationObject(this.navigationLocal)
  }

}
