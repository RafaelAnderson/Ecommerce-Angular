import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-angular-app';

  constructor(private fs: AngularFirestore){}

  ngOnInit(){
    this.fs.collection('test').snapshotChanges().subscribe(personas => {
      console.log(personas.map(x=>x.payload.doc.data()));
    })
  }

}
