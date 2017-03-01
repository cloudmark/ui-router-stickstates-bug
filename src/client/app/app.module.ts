import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

import {AboutModule} from './about/about.module';
import {HomeModule} from './home/home.module';
import {UIRouterModule, UIView} from 'ui-router-ng2';
import {NameListService} from "./name-list/name-list.service";
import {Ng2StateDeclaration} from "ui-router-ng2";
import {uiRouterConfigure} from "./router-extensions/routerConfig";

export let MAIN_STATES: Ng2StateDeclaration[] = [{
  name: 'app',
  url: '/:lang',
  component: AppComponent,
  abstract: true
}];

@NgModule({
  imports: [BrowserModule, HttpModule,
    AboutModule,
    HomeModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      config: uiRouterConfigure
    }),
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, NameListService],
  bootstrap: [UIView]

})
export class AppModule {
}
