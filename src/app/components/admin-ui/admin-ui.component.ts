import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUiComponent implements OnInit {
  constructor() { }

  rows = [
    {id :0,name:"nice3",background:"../../../assets/images/icon-admin-iconset-cross-small.svg"},
    {id :1,name:"nice32",background:"../../../assets/images/icon-admin-iconset-cross-small.svg"},
    {id :2,name:"nice33",background:"../../../assets/images/icon-admin-iconset-cross-small.svg"},
    {id :3,name:"nice34",background:"../../../assets/images/icon-admin-iconset-cross-small.svg"},
    {id :4,name:"nice3123",background:"../../../assets/images/icon-admin-iconset-cross-small.svg"},
    {id :5,name:"nice312312",background:"../../../assets/images/icon-admin-iconset-cross-small.svg"}
    ];
    id=this.rows.length;
  ngOnInit(): void {
  }
  onAdd(){
    console.log("id: ",this.id);
    this.id+=1;
this.rows.push(
  {
    id:this.id,
    name:"New nice "+ this.id,
    background:"#fab"
  }
)
  }
  onRemove(id: number){
    console.log("rows:",this.rows);
    console.log("removed pos: ",id);
    this.rows.splice(id,1)
    console.log("rowsAfter:",this.rows);
  }
}
