import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;  
  posts: any;
  post: Observable<Post>;

  title: string;
  content: string;
  documentId: number = 1;
  documentIdString: string = "X-Team-0";

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.snapshotChanges()
                      .map(actions => {
                        return actions.map(a => {
                          const data = a.payload.doc.data() as Post;
                          const id = a.payload.doc.id;
                          return { id, data };
                        });
                      });
  }

  addPost() {
    this.documentIdString = "X-Team-" + this.documentId++;    
    this.afs.collection('posts').doc(this.documentIdString).set(
      {
        'title': this.title,
        'content': this.content
      }
    );
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
}
