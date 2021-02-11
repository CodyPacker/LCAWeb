import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = new FormControl('');
  blogposts: any[] = [];

  constructor(db:AngularFireDatabase) { 
    db.list('/blogpost').valueChanges()
      .subscribe(blogposts => {
        this.blogposts = blogposts;
        console.log(this.blogposts)
      })
  }

  ngOnInit(): void {
  }

  submitPost() {
    
  }

}
