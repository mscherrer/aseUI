import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';


@Component({
  selector: 'monitoring',
  templateUrl: 'app/monitoring/monitoring.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class MonitoringAnalysis {
constructor() {
    console.log('pie demo');
  }

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

  // Pie
  private pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  private pieChartData = [300, 500, 100];
  private pieChartType = 'Pie';
}
