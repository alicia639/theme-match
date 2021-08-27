import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-join-party',
  templateUrl: './join-party.component.html',
  styleUrls: ['./join-party.component.css']
})
export class JoinPartyComponent implements OnInit {

  page:number;
  theme:string;

  public _code:string = "";

  @Input('code')
  set code(value: string)
  {
    console.log(value);
    this._code = value; 
    if (this._code != "")
      this.switchPage(1);
  }

  get code() : string
  {
    return this._code;
  }

  @Output() doneCode = new EventEmitter();

  constructor() 
  { 
    this.page = 0;
    this.theme = "";
  }

  ngOnInit(): void 
  {
      
  }

  switchPage(newPage:number) : void
  {
    this.page = newPage;
    console.log("switching to page " + newPage + " the code is " + this.code);
    if (newPage == 0)
    {
      this.doneCode.emit(true);
      this.code = "";
    }
    console.log("done switch code is " + this.code);
  }

  setTheme(e:string) : void
  {
    this.theme = e;
    console.log("setting theme " + this.theme);
  }

}
