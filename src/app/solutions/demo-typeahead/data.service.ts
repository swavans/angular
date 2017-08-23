import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

const URL = 'https://en.wikipedia.org/w/api.php';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  search(term: string): Observable<string[]> {

    if (term === '') {
      return Observable.of([]);
    }

    const params = new HttpParams()
      .set('search', term)
      .set('action', 'opensearch')
      .set('format', 'json')
      .set('callback', 'JSONP_CALLBACK');

    return this.http.request('JSONP', URL, {
      params: params,
      observe: 'body',
      responseType: 'json',
    }).map(response => response[1]);
  }
}
