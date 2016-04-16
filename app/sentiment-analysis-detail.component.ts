import {Component, Input} from 'angular2/core';
import {SentimentAnalysis} from './sentiment-analysis.component';
@Component({
	selector: 'my-sentiment-analysis-detail',
	template: `
		<h4>Selected Sentiment Analysis</h4>
		<div *ngIf="analysis">
			<p>Sentiment of @{{analysis.term}} is: <b>{{analysis.sentiment}}</b></p>
		</div>
		`
})
export class SentimentAnalysisDetailComponent {
	@Input()
	analysis: SentimentAnalysis;
}
