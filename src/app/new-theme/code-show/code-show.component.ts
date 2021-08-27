import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-show',
  templateUrl: './code-show.component.html',
  styleUrls: ['./code-show.component.css']
})
export class CodeShowComponent implements OnInit 
{

  @Output() pageChange = new EventEmitter<number>();

  private _code: string = "";

  @Input ('code')
  set code(value : string)
  {
    if (value)
    {
      this._code = value;
    }
  }

  get code() : string
  {
    return this._code;
  }


  constructor() { }

  ngOnInit(): void {
  }

  finished()
  {
    this.pageChange.emit(0);
  }

}
