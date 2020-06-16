import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  private innerValue: any;

  @Input() placeholder = '请输入';

  @Input()
  get data() {
    return this.innerValue;
  }

  set data(val) {
    this.innerValue = val;
    this.dataChange.emit(val);
  }

  @Output()
  dataChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleNgModelChange(val: any) {
    this.innerValue = val;
    this.dataChange.emit(val);
  }

}

