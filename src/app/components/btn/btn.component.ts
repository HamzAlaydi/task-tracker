import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() public text! :string ;
  @Input() public color! :string;
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit()
  }
}
