import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'models/user';

import { LiveUserService } from 'services/UserService/LiveUserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User

  email: String = '';
  password: String = '';

  constructor(private userService: LiveUserService, private router: Router) { }

  ngOnInit() { }

  loginUser() {
    this.userService.login(this.email, this.password).subscribe(res => {
      this.user = res;
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['/blog']);
    },
      err => alert('Gebruiker niet gevonden, mogelijk is de email of het wachtwoord verkeerd.'));
  }
}
