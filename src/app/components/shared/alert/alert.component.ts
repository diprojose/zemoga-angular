import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],

})
export class AlertComponent implements OnInit {
  activeAlert = false;
  @Input() color = 'danger';
  @Input() time = 3000;
  @Output() activeFalse: EventEmitter<any> = new EventEmitter();
  @Input() set active(value: any) {
    console.log('value', value);
    if (value) {
      this.activeAlert = true;
      setTimeout(() => {
        this.activeAlert = false;
        this.activeFalse.emit(false);
      }, this.time);
    }
  }

  ngOnInit() {
  }
}
