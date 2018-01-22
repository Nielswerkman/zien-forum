import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logoutUser() {
    localStorage.setItem('currentUser', null);
    window.location.reload();
  }

  userLoggedIn() {
    if (localStorage.getItem('currentUser') === 'null') {
      return false;
    } else {
      return true;
    }
  }

}
