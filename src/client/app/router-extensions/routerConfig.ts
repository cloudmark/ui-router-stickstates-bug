import * as _ from "lodash";
import {StatesModule} from "ui-router-ng2";
import {UIRouter} from "ui-router-core";
import {Injector} from "@angular/core";
import {StickyStatesPlugin} from "ui-router-sticky-states";

export function uiRouterConfigure(router: UIRouter, injector: Injector) {
  router.urlService.config.strictMode(false);
  router.plugin(StickyStatesPlugin);
}
