import {Component, Input} from 'angular2/core';
import {SentimentAnalysis} from './sentiment-analysis.component';
@Component({
	selector: 'my-sentiment-analysis-detail-BLA',
	template: `
		<h4>Selected Sentiment Analysis</h4>
		<div *ngIf="analysis && analysis.sentiment === -1">
			<p>Sentiment of {{analysis.term}}</p>
			<div>From: <input #startDate placeholder="Enter start date"/></div>
			<div>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input #endDate placeholder="Enter end date"/></div>
			<button type="button" (click)="runSentimentAnalysis(startDate.value, endDate.value)">Run Sentiment Analysis</button>
		</div>
		<div *ngIf="analysis && analysis.sentiment !== -1">
			<p>Sentiment of {{analysis.term}} is: <b>{{analysis.sentiment}}</b> from <i>{{analysis.fromDate}}</i> to <i>{{analysis.toDate}}</i></p>
			<div>From: <input #startDate placeholder="Enter start date"/></div>
			<div>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input #endDate placeholder="Enter end date"/></div>
			<button type="button" (click)="runSentimentAnalysis(startDate.value, endDate.value)">Re-run Sentiment Analysis</button>
		</div>
		`
})
export class SentimentAnalysisDetailComponent {
	@Input()
	analysis: SentimentAnalysis;

	runSentimentAnalysis(startDate: string, endDate: string) {
		if(startDate && endDate) {
			setTimeout( () => { this.analysis.fromDate = startDate; this.analysis.toDate = endDate; this.analysis.sentiment = Math.random(); }, 3000);
		}
	}
}
