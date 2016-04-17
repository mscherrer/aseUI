import {Component} from 'angular2/core';
import {SentimentAnalysis} from '../sentiment-analysis.component';
import {SentimentAnalysisService} from '../sentiment-analysis.service';
import {OnInit} from 'angular2/core';
import {SentimentAnalysisDetailComponent} from '../sentiment-analysis-detail.component';


@Component({
  selector: 'analysis',
  styles: [`
  .selected {
  background-color: #CFD8DC !important;
  color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 30em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`],
  templateUrl: 'app/analysis/analysis.component.html',
  directives: [SentimentAnalysisDetailComponent],
  providers: [SentimentAnalysisService],
})
export class AnalysisComponent implements OnInit {
  indexCounter = 7;
  title = 'Sentiment Analysis Demo';
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
