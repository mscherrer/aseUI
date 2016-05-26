import {Component, Input, ViewChild} from 'angular2/core';
import {SentimentAnalysis} from './sentiment-analysis.component';
import {DatePickerComponent} from "./date-picker.component";

@Component({
	selector: 'my-sentiment-analysis-detail',
	template: `
		<h4><b>Sentiment analysis of selected term:</b></h4>
		<div *ngIf="analysis && analysis.sentiment === -1">
		
		<button type="button" (click)="runSentimentAnalysis()">Run sentiment analysis</button>
		<br>
		<br>
		<p>Sentiment value of {{analysis.term}}:</p>
		
		<date-picker-demo #DatePickerComponent></date-picker-demo>
		
		</div>
		`,
  directives: [DatePickerComponent]
})
export class SentimentAnalysisDetailComponent {
	@Input()	analysis: SentimentAnalysis;

  @ViewChild('DatePickerComponent') child;

	runSentimentAnalysis() {
		//if(startDate && endDate) {
		//	setTimeout( () => { this.analysis.fromDate = startDate; this.analysis.toDate = endDate; this.analysis.sentiment = Math.random(); }, 3000);		}
    console.log("FROM == ".concat(this.child.pickerFromDate.toString()));
	}
}
