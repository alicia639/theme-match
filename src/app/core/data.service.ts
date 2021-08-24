import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase ) { }

  getOptions() : Observable<string[]> 
  {
    var items: Observable<string[]>;

    items = this.db.list('options').snapshotChanges().pipe(
      map((s:any[]) => {
        let listOf: string[] = [];
        s.map( (str:any) => {
          //console.log("getting template ");
          //console.log(t.payload.val());
          //console.log(JSON.parse(t.payload.val()));
          let newStr: string = str.payload.val();
          listOf.push(newStr); 
        });
        return listOf;
      }),
      catchError(this.handleError)
    );
    return items;
  }

  getSelected() : Observable<any[]> 
  {
    var items: Observable<any[]>;

    items = this.db.list('selected').snapshotChanges();
    items.subscribe(res=> console.log(res));
    return items;
  }

  addToSelected(val: string): void
  {
    var itemsRef = this.db.list('selected').push(val);
  }

  private handleError(error: any) 
    {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }
}
