import {Component, ViewChild} from 'angular2/core';
import {SentimentAnalysis} from '../sentiment-analysis.component';
import {SentimentAnalysisService} from '../sentiment-analysis.service';
import {OnInit} from 'angular2/core';
import {SentimentAnalysisDetailComponent} from '../sentiment-analysis-detail.component';
import {DatePickerComponent} from '../date-picker.component';


@Component({
  selector: 'analysis',
  styleUrls: ['app/css/analysis-component.css'],
  templateUrl: 'app/analysis/analysis.component.html',
  directives: [SentimentAnalysisDetailComponent],
  providers: [SentimentAnalysisService],
})
export class AnalysisComponent implements OnInit {
  indexCounter = 7;
  title = 'Sentiment Analysis Tool';
  analysis:SentimentAnalysis[];
  selectedAnalysis:SentimentAnalysis;

  constructor(private _sentimentAnalysisService:SentimentAnalysisService) {
  }

  getSentimentAnalysis() {
    this._sentimentAnalysisService.getSentimentAnalysis().then(analysis => this.analysis = analysis);
  }

  ngOnInit() {
    this.getSentimentAnalysis();
  }

  onSelect(analysisItem:SentimentAnalysis) {
    this.selectedAnalysis = analysisItem;
  }

  registerTerm(newTerm:string) {
    // POST to register term

    if (newTerm) {
      setTimeout(() => {
        this.analysis.push({
          "id": this.indexCounter,
          "term": newTerm,
          "fromDate": "02.04.2016",
          "toDate": "18.04.2016",
          "sentiment": -1
        });
        this.indexCounter++;
      }, 1000);
    }
  }
}
