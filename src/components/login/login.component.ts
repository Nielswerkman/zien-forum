import {Component, OnInit} from '@angular/core';
import {LoginDataservice} from '../../app/database/login.dataservice';
import {User} from '../../models/User';
import {Router} from '@angular/router';


@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor(private loginService: LoginDataservice, private router: Router) {
  }

  ngOnInit() {
    localStorage.setItem('currentUser', null);
  }

  onSubmit(input) {
    this.loginService.login(input.email, input.password)
      .subscribe(
        result => this.login(result)
      );
  }

  private login(res) {
    this.user = res;

    console.log(this.user.email);

    if (this.user.email == null) {
      // alert('Gebruiker niet gevonden.');
      return null;
    } else {
      this.user = res;
      localStorage.setItem('currentUser', JSON.stringify(this.user));

      // alert('Succesvol ingelogd');
      console.log('User successfully logged in');
      this.router.navigate(['blog']);
    }
  }
}
