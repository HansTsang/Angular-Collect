import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zg-input',
  templateUrl: './zg-input.component.html',
  styleUrls: ['./zg-input.component.scss']
})
export class ZgInputComponent implements OnInit {

  @Input() addSuffix = false;
  @Input() placeholder = '请输入';
  @Input() zgModel: any;
  @Output() zgModelChange = new EventEmitter();
  @Output() suffixClick = new EventEmitter();

  onclick() {
    this.suffixClick.next(this.zgModel);
  }


  constructor() { }

  ngOnInit() {
  }

}
