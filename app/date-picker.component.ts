import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'date-picker-demo',
  templateUrl: 'app/date-picker.component.html',
  directives: [DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DatePickerComponent {
  public pickerFromDate:Date = new Date();
  public pickerToDate:Date = new Date();
  public fromDateVisible:boolean = false;
  public toDateVisible:boolean = false;
  public events:Array<any>;
  public formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  public format:string = this.formats[0];
  public dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;

  public constructor() {
    this.pickerFromDate.setDate(this.pickerFromDate.getDate() - 1);
  }

  // todo: implement custom class cases
  public getDayClass(date:any, mode:string):string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (let i = 0; i < this.events.length; i++) {
        let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }

    return '';
  }

  public disabled(date:Date, mode:string):boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  public open():void {
    this.opened = !this.opened;
  }
}
