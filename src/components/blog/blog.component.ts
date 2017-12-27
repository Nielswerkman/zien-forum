import {Component, OnInit} from '@angular/core';
import {Blog} from 'models/Blog';
import {LiveBlogService} from '../../services/BlogService/LiveBlogService';
import {LiveUserService} from '../../services/UserService/LiveUserService';
import {User} from '../../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blog: Blog = new Blog();
  private users: User[];

  constructor(private router: Router,
              private blogData: LiveBlogService,
              private userData: LiveUserService) {
    this.userData.getAll().subscribe(result => this.users = result);
  }n

  ngOnInit() {
    // this.blogData.getBlogById(0).subscribe(request => this.blog = request);
  }

  getContent(source: any) {
    this.blog.content = source;
  }

  onSubmit() {
    this.blog.summary = this.blog.content;
    this.blog.content = null;
    this.blog.creator = JSON.parse(localStorage.getItem('currentUser'));

    console.log(JSON.stringify(this.blog));

    this.blogData.post(this.blog).subscribe(result => console.log(result));

    this.router.navigate(['detail-page']);
  }
}
