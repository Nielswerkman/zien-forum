import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpClientService {

  constructor(private http: Http, private router: Router) { }

  authorize(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }

  get(url) {
    const headers = new Headers();
    this.authorize(headers);

    return this.http.get(url, { headers: headers });
  }

  post(url, body, isBlob = false) {
    const headers = new Headers();
    this.authorize(headers);
    const options = { headers: headers };

    return this.http.post(url, body, options);
  }

  put(url, body) {
    const headers = new Headers();
    this.authorize(headers);

    console.log(url + body + headers);

    return this.http.put(url, body, { headers: headers })
  }

  delete(url) {
    const headers = new Headers();
    this.authorize(headers);

    return this.http.delete(url, { headers: headers });
  }
}
