import { Component, Input, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { DataRows } from 'src/app/data';
import { Row } from 'src/app/tiles';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUiComponent implements OnInit {
  constructor() { }
// @Input('ngModel')row?:Row;

   rows: Row[]= DataRows;
    id=this.rows.length;
  ngOnInit(): void {
  }
  onAdd(){
    console.log("id: ",this.id);
    this.id+=1;
this.rows.push(
  {
    id:this.id,
    link:"https://www.brandmaster.com",
    bgShow:false,
    otherShow:false,
    name:"New nice "+ this.id,
    background:"#33f"
  }
)


  }
  onRemove(id: number){
    console.log("rows:",this.rows);
    console.log("removed pos: ",id);
    this.rows.splice(id,1)
    console.log("rowsAfter:",this.rows);
  }
  toggleDisplay(id:number) {
    for(let row of this.rows){
      row.bgShow=false;
      row.otherShow=false;
    }
    this.rows[id].bgShow = !this.rows[id].bgShow;

  }
}
