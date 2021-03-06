import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Internship } from 'models/internship';

import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  private internships: Internship[];
  private internshipBlog: Internship[];

  constructor(private internshipService: LiveInternshipService, private router: Router) { }

  ngOnInit() {
    this.internshipService.getAll().subscribe(res => {
      this.internships = res;
      this.internshipBlog = this.internships.filter(
        internship => internship.blog != null && internship.blog.accepted === true
      )
    })
  }

  goToDetailPage(id: number) {
    this.router.navigate(['../detail/', id]);
  }

}
