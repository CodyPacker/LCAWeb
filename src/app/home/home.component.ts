import { Component, OnInit } from '@angular/core';
import Blogpost from '../models/blogpost';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogpost: Blogpost = new Blogpost();

  blogposts: any[] = [];

  constructor(private blogService: BlogService){}

  ngOnInit(): void {
    this.blogService.getAll()
    .subscribe(blogpost => {
      this.blogposts = blogpost;
    });
    console.log(this.blogposts)
  }

  saveBlogpost(): void {
    this.blogService.create(this.blogpost).then(() => {
      console.log("new blog post created successfully");
    });
  }


}
