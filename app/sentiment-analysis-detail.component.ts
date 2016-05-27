import {Component, Input, ViewChild, provide} from 'angular2/core';
import {SentimentAnalysis} from './sentiment-analysis.component';
import {DatePickerComponent} from "./date-picker.component";
import {Service} from './services/service';
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
	selector: 'my-sentiment-analysis-detail',
	template: `
		<h4><b>Sentiment analysis of selected term:</b></h4>
		<div *ngIf="analysis">
		
		<button type="button" (click)="runSentimentAnalysis()">Run sentiment analysis</button>
		<br>
		<br>
		<span *ngIf="analysis.sentiment !== -1">
		  <p>Sentiment value:<b> {{analysis.sentiment}}</b>
		  <br>From: {{analysis.fromDateSentiment | date:'fullDate'}}
		  <br>To: {{analysis.toDateSentiment | date:'fullDate'}}</p>
		  <br>
    </span>
		
		<date-picker-demo #DatePickerComponent></date-picker-demo>
		
		</div>
		`,
  directives: [DatePickerComponent],
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
export class SentimentAnalysisDetailComponent {
	@Input()analysis:any;
  @ViewChild('DatePickerComponent') child;
  sentiment:number;

  constructor(public service:Service) {}

  runSentimentAnalysis() {
    if(this.child.pickerFromDate && this.child.pickerToDate) {
      var tempFrom = (new Date(this.child.pickerFromDate.getFullYear(), this.child.pickerFromDate.getMonth(), this.child.pickerFromDate.getDay())).setHours(0,0,0,0);
      var tempTo = (new Date(this.child.pickerToDate.getFullYear(), this.child.pickerToDate.getMonth(), this.child.pickerToDate.getDay())).setHours(0,0,0,0);

      if(!(tempFrom > tempTo || tempFrom == tempTo)) {
        this.service.getSentimentValue(this.child.pickerFromDate, this.child.pickerToDate, this.analysis.term).subscribe(
          response => {
            this.analysis.sentiment = response;
            this.analysis.fromDateSentiment = this.child.pickerFromDate;
            this.analysis.toDateSentiment = this.child.pickerToDate;
            this.child.clear();
            this.child.clearVisible();
          }
        );
      }
    }
  }
}
