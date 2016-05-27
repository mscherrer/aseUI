import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Inject} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AnalysisComponent} from '../analysis/analysis.component';
import {MonitoringAnalysis} from '../monitoring/monitoring.component';


@Component({
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  templateUrl: 'app/app/app.component.html',
  selector: 'my-app',
  styles: [`
      nav#main ul {
        list-style-type: none;
        margin-bottom: 20px;
        padding-left: 0;
      }
      nav#main ul li {
        float: left;
        margin-right: 10px;
      }
      .clearfix {
        clear: both;
      }
    `]
})
@RouteConfig([
  {path: '/', name: 'Analysis', component: AnalysisComponent},
  {path: '/monitoring', name: 'Monitoring', component: MonitoringAnalysis},
])
export class AppComponent {

  constructor(@Inject(Router) public router:Router) {
    
  }
}
