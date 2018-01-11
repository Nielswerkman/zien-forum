import {Component, OnInit} from '@angular/core';
import {Blog} from 'models/Blog';
import {LiveBlogService} from '../../services/BlogService/LiveBlogService';
import {LiveUserService} from '../../services/UserService/LiveUserService';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';
import { Internship } from 'models/internship';

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
              private internshipService: LiveInternshipService) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    // this.blogData.getBlogById(0).subscribe(request => this.blog = request);
    this.internshipService.getAll().subscribe(result => {
      this.internship = result.filter( internship => internship.blog.creator.id == this.user.id)[0]
      console.log("LOG?" + JSON.stringify(this.internship))

    })
  }

  getContent(source: any) {
    this.blog.content = source;
  }

  onSubmit() {
    this.internship.blog.summary = null;
    this.internship.blog.content = this.blog.content;
    this.internship.blog.creator = this.user;
    this.internship.blog.title = this.blog.title;

    // console.log(JSON.stringify(this.blog));

    console.log(this.internship)
    this.internshipService.put(this.internship).subscribe(result => console.log(result));

    this.router.navigate(['forum']);
  }
}
