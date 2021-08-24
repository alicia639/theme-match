import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from "./core/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title:string="theme-picker";

  options:any[] = [];

  selected:any[] = [];

  output:string;

  constructor(private dataService:DataService)
  {
    this.output = "";
    this.dataService.getOptions()
            .subscribe((ent: any[]) => this.options = ent);
    this.dataService.getSelected()
            .subscribe((ent: any[]) => this.selected = ent);
    console.log(this.selected);
  }

  selectFromList()
  {
    if (this.options.length - this.selected.length == -1)
    {
      this.output="no more themes";
    }
    else
    {
      let str:string = this.selected[0];
      while (this.selected.indexOf(str)!=-1)
      {
        str = this.options[Math.ceil(Math.random()*this.options.length)-1];
      }
      this.output = str;
      this.dataService.addToSelected(this.output);
    }
  }
}
