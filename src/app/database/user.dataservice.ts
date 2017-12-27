import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {User} from 'models/User';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { host, folder } from 'global'
import { HttpClientService } from 'app/database/HttpClientService';

@Injectable()
export class UserDataservice {

  private Url = host + folder + 'user';

  constructor(private http: HttpClientService) {
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  getAll(): Observable<User[]> {
    return Observable.from(this.http.get(this.Url + '/all').map((res: Response) => res.json()))
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get(this.Url + id)
      .map(request => {
        return request.json()
      });
  }

  create(user: User) {
    return this.http.post(this.Url, user);
  }

  update(user: User){
    return this.http.put(this.Url, user);
  }
}
