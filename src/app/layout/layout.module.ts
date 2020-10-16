
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
// import { LayoutInitComponent } from './layout-init/layout-init.component';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
