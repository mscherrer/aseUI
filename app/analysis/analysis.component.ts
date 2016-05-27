import {Component, provide} from 'angular2/core';
import {SentimentAnalysis} from '../sentiment-analysis.component';
import {SentimentAnalysisService} from '../sentiment-analysis.service';
import {OnInit} from 'angular2/core';
import {SentimentAnalysisDetailComponent} from '../sentiment-analysis-detail.component';
import {Service} from '../services/service';
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
  selector: 'analysis',
  styleUrls: ['app/css/analysis-component.css'],
  templateUrl: 'app/analysis/analysis.component.html',
  directives: [SentimentAnalysisDetailComponent],
  providers: [SentimentAnalysisService, Service,
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
  ],
})
export class AnalysisComponent implements OnInit {
  indexCounter = 7;
  title = 'Sentiment Analysis Tool';
  registeredTerms:SentimentAnalysis[];
  selectedSentimentAnalysis:SentimentAnalysis;

  constructor(public service:Service) {}

  retrieveTermsFromServer() {
    var topics = [];
    this.service.getTerms().subscribe(
      response => {
        for(var item of response) {
          var sentimentAnalysis = {
            'id': null,
            'term': item.topic,
            'fromDateSentiment': null,
            'toDateSentiment': null,
            'sentiment': -1
          };
          topics.push(sentimentAnalysis);
        }
        this.registeredTerms = topics;
      }
    );
  }

  ngOnInit() {
    this.retrieveTermsFromServer();
  }

  onSelect(analysisItem:SentimentAnalysis) {
    this.selectedSentimentAnalysis = analysisItem;
  }

  registerTerm(newTerm:string) {
    if (newTerm) {
      this.service.registerTerm(newTerm).subscribe(
        response => {
          console.log(response);
          this.retrieveTermsFromServer();
        }
      );
    }
  }
}
