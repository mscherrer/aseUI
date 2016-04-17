import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HashLocationStrategy} from 'angular2/router';
import {LocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
