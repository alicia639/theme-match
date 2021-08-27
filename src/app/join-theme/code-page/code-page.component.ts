import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit 
{
  

  @Output() pageNumber = new EventEmitter<number>();
  @Output() themeVal = new EventEmitter<string>();

  private _code:string = "";

  @Input('code')
  set code(value:string)
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

  name:string;
  error:string;

  constructor(private data: DataService) 
  {
    this.name = "";
    this.error = "";
  }

  ngOnInit(): void 
  {
  }

  cancel(): void
  {
    this.pageNumber.emit(0);
  }

  sendData() : void
  {
    var theme : string = this.data.getRandomOption(this.code, this.name);
    //console.log("theme " + theme);
    if (theme == "--")
    {
      this.error = "A person with that name has already chosen a theme."
    }
    else if (theme == "++")
    {
      this.error = "No more theme options available";
    }
    else if (theme== "+-")
    {
      this.error = "That code is invalid.";
    }
    else
    {
      this.themeVal.emit(theme);
      this.pageNumber.emit(2);
    }
    
  }

}
