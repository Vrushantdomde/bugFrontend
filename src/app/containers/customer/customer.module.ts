import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { BaseModule } from '../../views/base/base.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BaseModule
  ]
})
export class CustomerModule { }
