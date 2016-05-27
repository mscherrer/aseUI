import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class Service {
  headers:Headers;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
  }

  registerTerm(topic:string):Observable<any> {
    var url = 'http://twitterstreamingserver.us-east-1.elasticbeanstalk.com/topics?topic=' + topic;
    var myThis = this;
    return this.http.post(url, '', {headers: this.headers})
      .map(response => myThis.extractPostData(response))
      .catch(this.handleError);
  }

  getTerms():Observable<any> {
    var url = 'https://9t4eyywhvf.execute-api.us-east-1.amazonaws.com/prod/get_registered_terms';
    var myThis = this;

    return this.http.get(url, {headers: this.headers})
      .map(response => myThis.extractData(response))
      .catch(this.handleError);
  }

  getSentimentValue(from: Date, to: Date, topic: string):Observable<any> {
    var url = 'https://sv1wyirtxa.execute-api.us-east-1.amazonaws.com/prod/get_sentiment_of_term';

    var body = {
      "from": from.getTime().toString(),
      "to":   to.getTime().toString(),
      "topic": topic.replace("#", "")
    };

    var myThis = this;
    return this.http.post(url, JSON.stringify(body), {headers: this.headers})
      .map(response => myThis.extractData(response))
      .catch(this.handleError);
  }

  getMonitoring():Observable<any> {
    var url = 'https://8yg592f1id.execute-api.us-east-1.amazonaws.com/prod/monitoring';
    var myThis = this;
    return this.http.get(url, {headers: this.headers})
      .map(response => myThis.extractData(response))
      .catch(this.handleError);
  }

  private extractPostData(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    } else if (res.status === 204) {
      return '';
    }
    return res;
  }

  private extractData(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    } else if (res.status === 204) {
      return '';
    }
    return res.json();
  }

  private handleError(error:any) {
    console.log(error);
    let errMsg = error.message || 'Server error';
    if (error.status && error.status === 401) {
      errMsg = 'Unauthorized';
    }
    return Observable.throw(errMsg);
  }
}



