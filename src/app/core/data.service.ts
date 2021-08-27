import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { DatabaseSnapshot } from '@angular/fire/database';
import { async, waitForAsync } from '@angular/core/testing';

import { Observable, Subscription, Subject } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { IThemes } from '../shared/interfaces';

const letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                          "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  party: any = {};

  constructor(private db: AngularFireDatabase ) 
  {
    this.db.object('themes/').valueChanges().subscribe(theme =>
    {
      if (theme)
        this.party = theme;
    });
  }

  getRandomOption(code: string, name: string) :  string
  {

    if (!this.party[code])
    {
      return "+-";
    }

    var people: string[] = [];
    
    Object.keys(this.party[code].people).forEach(prop => {
      people.push(this.party[code].people[prop]);
    });    

    if (people.indexOf(name.toLowerCase()) != -1)
    {
      return "--";
    }

    if (!this.party[code].options)
    {
      return "++";
    }

    var keys:string[] = [];

    Object.keys(this.party[code].options).forEach(prop => {
      keys.push(prop);
    });

    var ind:string = keys[Math.ceil(Math.random()*keys.length)-1];

    var str: string = this.party[code].options[ind];

    this.db.list('themes/' + code + '/options').remove(""+ind);

    this.db.list('themes/' + code + '/people').push(name.toLowerCase());

    return str;
  }

  createThemeList(themes: string[]) :  string
  {
    var code: string = "";

    for (var i:number = 0; i < 8; i++)
    {
      code += letters[Math.ceil(Math.random()*letters.length)-1];
    }

    this.db.object('themes/' + code).set({
      options: themes,
      people:[""]
    });

    return code;
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
