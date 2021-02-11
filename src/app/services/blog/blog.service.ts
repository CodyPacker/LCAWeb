import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import Blogpost from '../../models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private dbpath = '/blogpost';

  blogpostRef: AngularFireList<Blogpost>;

  constructor(private db: AngularFireDatabase) {
    this.blogpostRef = db.list(this.dbpath);
   }

   getAll(): AngularFireList<Blogpost> {
     return this.blogpostRef;
   }

   create(blogpost: Blogpost) {
     return this.blogpostRef.push(blogpost);
   }

   update(key: string, value: any): Promise<void> {
     return this.blogpostRef.update(key, value);
   }

   delete(key: string): Promise<void> {
     return this.blogpostRef.remove(key);
   }

}
