import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';
 
// Import routing module
import { AppRoutingModule } from './app-routing.module';
// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent  } from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavComponent,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  CarouselModule,
  
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CustomerComponent } from './containers/customer/customer.component';
import { DefaultPageComponent } from './containers/default-page/default-page.component';
import { NavPageComponent } from './containers/default-page/nav-page/nav-page.component';
import { FooterPageComponent } from './containers/default-page/footer-page/footer-page.component';
import { CarouselsComponent } from './views/base/carousels/carousels.component';
import { DocsComponentsModule } from "../components/docs-components.module";

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
    declarations: [AppComponent, ...APP_CONTAINERS, CustomerComponent, DefaultPageComponent, NavPageComponent, FooterPageComponent, CarouselsComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        IconSetService,
        Title
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AvatarModule,
        BreadcrumbModule,
        FooterModule,
        DropdownModule,
        GridModule,
        HeaderModule,
        SidebarModule,
        IconModule,
        NavModule,
        ButtonModule,
        FormModule,
        UtilitiesModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        SidebarModule,
        SharedModule,
        TabsModule,
        ListGroupModule,
        ProgressModule,
        BadgeModule,
        ListGroupModule,
        CardModule,
        NgScrollbarModule,
        CarouselModule,
        DocsComponentsModule
    ]
})
export class AppModule {
}
