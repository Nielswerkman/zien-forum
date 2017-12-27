import { Injectable } from '@angular/core';
import { host, folder } from 'global';
import { HttpClientService } from 'app/database/HttpClientService';
import { Observable } from 'rxjs/Observable';
import { School } from 'models/school';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Injectable()
export class SchoolService {

  private Url = host + folder + 'school';
  
    constructor(private http: HttpClientService) {
    }
  
    getAll(): Observable<School[]> {
      return Observable.from(this.http.get(this.Url + '/all')).map(response => response.json());
    }

}
