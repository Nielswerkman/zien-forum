import { Observable } from 'rxjs/Observable';
import { User } from 'models/user';
import { IGenericService } from 'services/IGenericService';

export interface IUserService extends IGenericService<User> {
  login(email: String, password: String): Observable<User>;
}
