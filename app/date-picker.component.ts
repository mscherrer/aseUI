import {Component, Input} from 'angular2/core';
import {SentimentAnalysis} from './sentiment-analysis.component';
@Component({
  selector: 'date-picker-demo',
  templateUrl: `
		<h4>FUUUUUUUUUUUUCK!!!!</h4>
		`
})
export class DatePickerComponent {
  @Input()
  analysis: SentimentAnalysis;

  runSentimentAnalysis(startDate: string, endDate: string) {
    if(startDate && endDate) {
      setTimeout( () => { this.analysis.fromDate = startDate; this.analysis.toDate = endDate; this.analysis.sentiment = Math.random(); }, 3000);
    }
  }
}
