import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent implements OnInit 
{
  @Output() newCode = new EventEmitter<string>();

  page:number;
  code:string;

  constructor() 
  {
    this.page = 0;
    this.code = "";
  }

  ngOnInit(): void {
  }

  switchPage(newPage:number) : void
  {
    this.page = newPage;
  }

  setCode(e: string) : void
  {
    this.code = e;
    this.newCode.emit(this.code);
  }

}
