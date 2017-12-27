import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Blog} from 'models/Blog';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { host, folder } from 'global'
import { HttpClientService } from 'app/database/HttpClientService';

@Injectable()
export class BlogDataservice {

  private Url = host + folder + 'blog';

  constructor(private http: HttpClientService) {
  }

  getAll(): Observable<Blog[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()))
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http
      .get(this.Url + id)
      .map(request => {
        return request.json()
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  create(blog: Blog) {
    return this.http.post(this.Url, blog);
  }

  update(blog: Blog) {
    return this.http.put(this.Url, blog);
  }
}
