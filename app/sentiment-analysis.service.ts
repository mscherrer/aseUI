import {ANALYSIS} from './mock-sentiment-analysis';
import {Injectable} from 'angular2/core';

@Injectable()
export class SentimentAnalysisService {
	getSentimentAnalysis() {
		return Promise.resolve(ANALYSIS);
	}
}
