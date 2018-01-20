import {IGenericService} from '../IGenericService';
import {User} from '../../models/user';
import {Observable} from 'rxjs/Observable';

export interface IUserService extends IGenericService<User> {
  login(email: String, password: String): Observable<User>;
}
