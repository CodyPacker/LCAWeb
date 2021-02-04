import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-brothers',
  templateUrl: './brothers.component.html',
  styleUrls: ['./brothers.component.css']
})
export class BrothersComponent implements OnInit {

  brothers: any[] = [];

  constructor(db: AngularFireDatabase) { 
    db.list('/brothers').valueChanges()
      .subscribe(brothers => {
        this.brothers = brothers;
        console.log(this.brothers)
      })
  }

  ngOnInit(): void {
  }

}
