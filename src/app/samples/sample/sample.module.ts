import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample.routing';
import { SampleComponent } from './sample.component';
import { SampleHeaderComponent } from './sample-header/sample-header.component';


@NgModule({
  declarations: [SampleComponent, SampleHeaderComponent],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
