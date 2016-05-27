import {Component, Input, ViewChild} from 'angular2/core';
import {SentimentAnalysis} from './sentiment-analysis.component';
import {DatePickerComponent} from "./date-picker.component";

@Component({
	selector: 'my-sentiment-analysis-detail',
	template: `
		<h4><b>Sentiment analysis of selected term:</b></h4>
		<div *ngIf="analysis">
		
		<button type="button" (click)="runSentimentAnalysis()">Run sentiment analysis</button>
		<br>
		<br>
		<span *ngIf="analysis.sentiment !== -1">
		  <p>Sentiment value of {{analysis.term}}:<b> {{analysis.sentiment}}</b>
		  <br>From: {{analysis.fromDateSentiment | date:'fullDate'}}
		  <br>To: {{analysis.toDateSentiment | date:'fullDate'}}</p>
		  <br>
    </span>
		
		<date-picker-demo #DatePickerComponent></date-picker-demo>
		
		</div>
		`,
  directives: [DatePickerComponent]
})
export class SentimentAnalysisDetailComponent {
	@Input()	analysis: SentimentAnalysis;

  @ViewChild('DatePickerComponent') child;

	runSentimentAnalysis() {
		if(this.child.pickerFromDate && this.child.pickerToDate) {
			setTimeout( () => {
        this.analysis.fromDateSentiment = this.child.pickerFromDate;
        this.analysis.toDateSentiment = this.child.pickerToDate;
        this.analysis.sentiment = Math.random();
        this.child.clear();
        this.child.clearVisible();
      }, 100);
    }
	}
}
