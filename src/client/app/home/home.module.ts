import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {UIRouterModule,Transition} from "ui-router-ng2";
import {Ng2StateDeclaration} from "ui-router-ng2";


export let CHILD_STATES: Ng2StateDeclaration[] = [{
  name: 'app.home',
  url: '/',
  component: HomeComponent,
  resolve:[
    {
      token: 'transitionParams',
      deps: [Transition],
      resolveFn: transitionParamsResolver
    }
  ]
}];

export function transitionParamsResolver(transition: Transition) {
  debugger;
  console.log("Transitioning!");
  return transition.params();
}

@NgModule({
  imports: [CommonModule,
    UIRouterModule.forChild({
      states: CHILD_STATES
    })],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {
}
