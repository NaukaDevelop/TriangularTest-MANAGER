import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../navigation.service';

import { NavigationObject } from '../../../models/navigation.model'

import * as menuItems from './navigation-sidebar-list.data'

@Component({
  selector: 'app-navigation-sidebar-list',
  templateUrl: './navigation-sidebar-list.component.html',
  styleUrls: ['./navigation-sidebar-list.component.scss']
})
export class NavigationSidebarListComponent implements OnInit {

  selectedItem = '';
  userName = 'Administrator'

  navigationLocal: NavigationObject

  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationState.subscribe(data =>
      this.navigationLocal = data
    );
    this.navigationLocal.menuItems = menuItems
    this.navigationService.changeNavigationObject(this.navigationLocal)
  }

  icon: boolean = false;

  header: string = "Nuevo menu"



  ngOnInit(): void {
  }

  handleClick(selectedItem) {
    // this.selectedItem = selectedItem.linkTitle;

    this.navigationLocal.title = selectedItem.linkTitle
    this.navigationService.changeNavigationObject(this.navigationLocal)
  }

  click() {
    this.icon = !this.icon;
  }

}
