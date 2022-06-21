import { Component, Input, OnInit } from '@angular/core';
import { Row } from 'src/app/tiles';
import {DataRows} from '../../data';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() items:Row[]=DataRows;
  constructor() { 

  }
  ngOnInit(): void {
  }

}
