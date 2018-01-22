import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Blog } from 'models/Blog';
import { User } from '../../models/User';
import { Internship } from 'models/internship';

import { LiveBlogService } from 'services/BlogService/LiveBlogService';
import { LiveUserService } from 'services/UserService/LiveUserService';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public internship: Internship;
  public blog: Blog = new Blog();
  private user: User;

  constructor(private router: Router,
              private blogData: LiveBlogService,
              private userData: LiveUserService,
              private internshipService: LiveInternshipService,
              private blogService: LiveBlogService) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    // this.blogData.getBlogById(0).subscribe(request => this.blog = request);
    if (localStorage.getItem('currentUser') === 'null') {
      this.router.navigate(['/login'])
    }
    this.internshipService.getAll().subscribe(result => {
      this.internship = result.filter( internship => internship.blog.creator.id === this.user.id)[0]
    })
  }

  getContent(source: any) {
    this.blog.content = source;
  }

  onSubmit() {
    this.internship.blog.summary = null;
    this.internship.blog.date = new Date();
    this.internship.blog.content = this.blog.content;
    this.internship.blog.creator = this.user;
    this.internship.blog.title = this.blog.title;
    this.internship.blog.accepted = false;
    this.internship.blog.rejected = false;

    this.internshipService.put(this.internship).subscribe();
    this.blogService.put(this.internship.blog).subscribe();

    this.router.navigate(['/forum']);
  }
}
