import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  baseUrl: string = 'https://api.spacexdata.com/v3/launches';
  constructor(private http: HttpClient) {

  }

  
  getMissionsList() {
    return this.http.get(this.baseUrl);
  }
 

  // getConfigResponse(): Observable<HttpResponse<Mission>> {
  //   return this.http.get<Mission>(
  //     this.baseUrl, { observe: 'response' });
  // }
  // get(path: string, httpParams: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http
  //     .get(`${environment.api_url}${path}`)
  // }

}
