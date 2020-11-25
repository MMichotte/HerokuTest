import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: any[];

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>('/api/cars',
      {observe: 'response'});
  }

}
