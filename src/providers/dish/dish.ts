import { HttpClient } from '@angular/common/http';
import { Dish } from '../../shared/dish';
import { Observable } from 'rxjs/Observable';
import { baseUrl } from '../../shared/baseUrl';
import { Injectable } from '@angular/core';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient,
  public processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello DishProvider Provider');
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseUrl + 'dishes/')
      .map( res => { return this.processHttpmsgService.extractData(res); })
        .catch( error => { return this.processHttpmsgService.handleError(error); });
      
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseUrl + 'dishes/' + id)
      .map( res => { return this.processHttpmsgService.extractData(res); })
        .catch( error => { return this.processHttpmsgService.handleError(error); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseUrl + 'dishes?featured=true')
    .map( res => { return this.processHttpmsgService.extractData(res)[0]; })
    .catch( error => { return this.processHttpmsgService.handleError(error); });
  }

}
