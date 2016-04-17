import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';


@Component({
  selector: 'monitoring',
  templateUrl: 'app/monitoring/monitoring.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MonitoringAnalysis {

  constructor() {}

  // lineChart
  private lineChartData:Array<any> = [
    [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
    [0.0, 0.5, 0.5, 0.6, 0.8, 1, 1.1, 1.2, 1.2, 1.1, 1, 0.9, 0.8, 0.7, 0.7, 0.6, 0.7, 0.6]
  ];
  private lineChartLabels:Array<any> = ['10:00', '10:02', '10:04', '10:06', '10:08', '10:10', '10:12', '10:14', '10:16', '10:18', '10:20', '10:22', '10:24', '10:26', '10:28', '10:30', '10:32', '10:34'];
  private lineChartSeries:Array<any> = ['Active Nodes', 'CPU Load'];
  private lineChartOptions:any = {
    animation: false,
    responsive: true,
    bezierCurve : false,
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
  };
  private lineChartColours:Array<any> = [
    { // green (active nodes)
      fillColor: 'rgba(148,159,177,0.0)',
      strokeColor: 'rgba(0, 255, 0, 0.5)',
      pointColor: 'rgba(0, 255, 0, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(148,159,177,0.8)'
    },
    { // red (CPU load)
      fillColor: 'rgba(148,159,177,0.0)',
      strokeColor: 'rgba(255, 1, 0, 0.5)',
      pointColor: 'rgba(255, 1, 0, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(148,159,177,0.8)'
    }
  ];
  private lineChartLegend:boolean = true;
  private lineChartType:string = 'Line';

  // lineChart2
  private lineChartData2:Array<any> = [
    [0.5, 1, 1, 1, 1.5, 2, 1.7, 1.1, 1.2, 1.2, 1.1, 1, 0.9, 0.8, 0.7, 0.7, 0.6, 0.7, 0.6]
  ];
  private lineChartLabels2:Array<any> = ['10:00', '10:02', '10:04', '10:06', '10:08', '10:10', '10:12', '10:14', '10:16', '10:18', '10:20', '10:22', '10:24', '10:26', '10:28', '10:30', '10:32', '10:34'];
  private lineChartSeries2:Array<any> = ['Latency'];
  private lineChartOptions2:any = {
    animation: false,
    responsive: true,
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
  };
  private lineChartColours2:Array<any> = [
    { // blue (latency)
      fillColor: 'rgba(148,159,177,0.0)',
      strokeColor: 'rgba(255, 0, 131, 0.5)',
      pointColor: 'rgba(255, 0, 131, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(148,159,177,0.8)'
    }
  ];
  private lineChartLegend2:boolean = true;
  private lineChartType2:string = 'Line';
}
