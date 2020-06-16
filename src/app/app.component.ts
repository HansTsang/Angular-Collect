import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Collect';
  inputValue = '456s';
  zg = '';

  logData() {
    console.log(this.inputValue);

  }
  handleChange(val: any) {
    console.log(val);
  }
  onSuffixClick(val: any) {
    console.log(val);
  }
}
