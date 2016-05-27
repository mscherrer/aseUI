import {Component, provide} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {Service} from '../services/service';
import {
  Http,
  BaseRequestOptions,
  ConnectionBackend,
  XHRBackend,
  BrowserXhr,
  ResponseOptions,
  BaseResponseOptions
} from 'angular2/http';


@Component({
  selector: 'monitoring',
  templateUrl: 'app/monitoring/monitoring.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [Service,
    BaseRequestOptions,
    BrowserXhr,
    XHRBackend,
    Http,
    provide(
      ResponseOptions, {useClass: BaseResponseOptions}
    ),
    provide(
      Http,
      {
        useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [XHRBackend, BaseRequestOptions]
      }),
  ]
})

export class MonitoringAnalysis {
  ec2Instances:any[];

  constructor(public service:Service) {
    service.getMonitoring().subscribe(
      response => {
        this.ec2Instances = response;
      }
    );
  }
}
