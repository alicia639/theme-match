import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title:string="theme-picker";
  private _code:string = "";

  @Input('code')
  set code(value:string)
  {
    this._code = value;
  }

  get code() : string
  {
    return this._code;
  }

  constructor()
  { 
  }

  prepJoin(e:string)
  {
    this.code = e;
  }

  resetCode() : void
  {
    this.code = "";
  }
}
