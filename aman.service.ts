import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class amanService {

  constructor(public http: Http) {
  }
  private handleError(error: any) {
    return Observable.throw(error.json());
  }
getCountry() {
 const url ='https://d32sbion19muhj.cloudfront.net/pub/interview/countries' ;
  const headers = new Headers();
  return this.http.get(url, {
    headers: headers
  })
    .map((data: Response) => data.json())
    .catch(err => this.handleError(err));
}

getState() {
  const url ='http://d32sbion19muhj.cloudfront.net/pub/interview/states' ;
  //  const headers = new Headers();
   return this.http.get(url, {
    //  headers: headers
   })
     .map((data: Response) => data.json())
     .catch(err => this.handleError(err));
}

getCity() {
  const url ='http://d32sbion19muhj.cloudfront.net/pub/interview/cities' ;
   const headers = new Headers();
   return this.http.get(url, {
     headers: headers
   })
     .map((data: Response) => data.json())
     .catch(err => this.handleError(err));
}
}
