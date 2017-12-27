import {Injectable} from '@angular/core'
import {User} from '../../models/User';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {folder, host} from '../../global';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginDataservice {

  private apiUrl: String = host + folder;
  private user: User;

  constructor(private http: Http) {
  }

  login(providedEmail, providedPassword): Observable<User> {
    return this.http.post(this.apiUrl + 'user/login', {email: providedEmail, password: providedPassword})
      .map(response => response.json())
      .catch(error => {
        alert('Wachtwoord en/of gebruikersnaam fout.');
        return JSON.stringify(error);
      })
  }
}
