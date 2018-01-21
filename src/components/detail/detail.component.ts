import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog } from 'models/blog';
import { Internship } from 'models/internship';

import { LiveBlogService } from 'services/BlogService/LiveBlogService';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  blog: Blog;
  internship: Internship;
  internships: Internship[] = [];

  constructor(private route: ActivatedRoute,
    private blogService: LiveBlogService,
    private internshipService: LiveInternshipService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.internshipService.getAll().subscribe(res => {
        this.internships = res;

        for (const inter of this.internships) {
          if (inter.blog.id === this.id) {
            this.internship = inter;
          }
        }
      });

      this.blogService.get(this.id).subscribe(res => {
        this.blog = res;
      });

    });
  }


}
