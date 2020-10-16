import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';

import { NavigationObject } from '../../models/navigation.model'

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit {

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
