import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components and routing
import { NavigationRoutingModule } from './navigation.routing';
import { NavigationBrandComponent } from './components/navigation-toolbar/navigation-brand/navigation-brand.component';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { NavigationToolbarComponent } from './components/navigation-toolbar/navigation-toolbar.component';
import { NavigationComponent } from './navigation.component';
// Local
import { MaterialModule } from 'src/app/core/material/material.module';

// Vendor
import { NgSelectModule } from '@ng-select/ng-select';
import { NavigationSidebarListComponent } from './components/navigation-sidebar/navigation-sidebar-list/navigation-sidebar-list.component';
@NgModule({
  declarations: [NavigationBrandComponent, NavigationSidebarComponent, NavigationToolbarComponent, NavigationComponent, NavigationSidebarListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgSelectModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
