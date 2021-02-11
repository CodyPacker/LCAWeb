import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Blogpost from '../models/blogpost';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogpost: Blogpost = new Blogpost();

  constructor(private blogService: BlogService){}

  ngOnInit(): void {
  }

  saveBlogpost(): void {
    this.blogService.create(this.blogpost).then(() => {
      console.log("new blog post created successfully");
    });
  }

  newBlogpost(): void {
    this.blogpost = new Blogpost();
  }

}
