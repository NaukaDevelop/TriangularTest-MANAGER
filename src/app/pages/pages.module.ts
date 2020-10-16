import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';

import { HomeComponent } from './home/home.component';
import { ByeComponent } from './bye/bye.component';

import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [HomeComponent, ByeComponent,],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
