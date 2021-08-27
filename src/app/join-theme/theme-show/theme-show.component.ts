import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-show',
  templateUrl: './theme-show.component.html',
  styleUrls: ['./theme-show.component.css']
})
export class ThemeShowComponent implements OnInit
{

  @Output() pageChange = new EventEmitter<number>();

  private _theme: string = "";

  @Input ('theme')
  set theme(value : string)
  {
    if (value)
    {
      this._theme = value;
    }
  }

  get theme() : string
  {
    return this._theme;
  }

  constructor() { }

  ngOnInit(): void {
    //console.log("theme in theme-show" + this.theme);
  }

  finished()
  {
    this.pageChange.emit(0);
  }

}
