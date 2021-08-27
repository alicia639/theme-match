import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { DataService } from '../../core/data.service';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit
{
  @Output() pageChange = new EventEmitter<number>();
  @Output() codeValue = new EventEmitter<string>();

  @ViewChild('newTheme') inputName : any;

  basicOptions:string[] = ["Decades", "Met gala", "Coachella", "Tropical", "Disney",  "Holidays", "Monochrome", "Retirement home", "Adam Sandler", "Taylor Swift eras", "Greek gods/godesses", "Extraterrestrial", "Old Halloween costumes", "Crashing a wedding as the disgruntled ex", "2000 teen drama", "Dress as someone else in the group", "70s disco", "80s/hippies", "Fairy"];

  selected:string[];

  inputted: string[];

  constructor(private data: DataService) {
    this.selected = [];
    this.inputted = [];
  }

  ngOnInit(): void {
  }

  updateSelected(option:string, e:any) : void
  {
    if (e.target.checked)
    {
      this.selected.push(option);
      //console.log("adding theme" + this.selected);
    }
    else
    {
      this.selected.splice(this.selected.indexOf(option), 1);
      //console.log("removing theme" + this.inputted);
    }
  }

  addTheme(theme:string) : void
  {
    this.inputted.push(theme);
    this.inputName.nativeElement.value = ' ';
    //console.log("adding theme" + this.inputted);
  }

  removeTheme(theme: string) : void
  {
    this.inputted.splice(this.inputted.indexOf(theme), 1);
  }

  cancel(): void
  {
    this.pageChange.emit(0);
  }

  createDatabase(): void
  {
    this.selected = this.selected.concat(this.inputted);
    //console.log("list ");
    //console.log(this.selected);
    var code: string = this.data.createThemeList(this.selected);
    this.codeValue.emit(code);
    this.pageChange.emit(2);
  }

}
