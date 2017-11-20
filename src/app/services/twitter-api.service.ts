import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TwitterApiService {

  constructor( private http: Http) { }

  authenticate() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    return this.http.post('http://localhost:3000/authorize', {headers: headers}).map(res => { return res.json(); }) 
    .catch((error:any) => Observable.throw(error.json().error || 'Server error' )); 
  }

  getTrends() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    return this.http.post('http://localhost:3000/trends', {headers: headers}).map(res => { return res.json(); }) 
    .catch((error:any) => Observable.throw(error.json().error || 'Server error' )); 
  }

}
