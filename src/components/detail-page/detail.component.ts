import { Component, OnInit } from '@angular/core';
import { LiveBlogService } from '../../services/BlogService/LiveBlogService'
import { Blog } from 'models/Blog';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Params} from '@angular/router'

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'detail-page',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    id: number;
    private sub: any;

    private blog: Blog;

    constructor(private blogService: LiveBlogService, private route: ActivatedRoute) {
        this.route.params.subscribe( params => console.log(params))
    }

    ngOnInit() {

        this.id = +this.route.snapshot.params['id'];
        this.blogService.get(this.id).subscribe(r => {
            this.blog = r
        });
    }
}
