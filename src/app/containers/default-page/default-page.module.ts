import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseModule} from '../../views/base/base.module';
//import {BaseModule} from '../index'
import { DefaultPageRoutingModule } from './default-page-routing.module';
import { CarouselsComponent } from '../../views/base/carousels/carousels.component';

import {
  CarouselModule
} from '@coreui/angular';

@NgModule({
  declarations: [
    CarouselsComponent
  ],
  imports: [
    CommonModule,
    //CarouselModule,
    DefaultPageRoutingModule,
    BaseModule,
    
  ]
})
export class DefaultPageModule { }
