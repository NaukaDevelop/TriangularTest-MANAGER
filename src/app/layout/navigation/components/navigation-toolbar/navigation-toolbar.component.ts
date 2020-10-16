import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../navigation.service';

import { NavigationObject } from '../../models/navigation.model'

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.scss']
})
export class NavigationToolbarComponent implements OnInit {

  navigationLocal: NavigationObject

  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationState.subscribe(data =>
      this.navigationLocal = data
    );
    this.navigationLocal.isAuthenticated = true
    this.navigationService.changeNavigationObject(this.navigationLocal)
  }

  ngOnInit(): void {

  }

  toogleSidebar() {
    this.navigationLocal.opened = !this.navigationLocal.opened
    this.navigationService.changeNavigationObject(this.navigationLocal)
  }


  logout() {

  }

  login() {

  }
}
