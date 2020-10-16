import * as moment from 'moment'

export class DateRangeModel {
  startDate: string;
  endDate: string;

  constructor() {
    this.startDate = moment().format('YYYY-MM-DD')
    this.endDate = moment().format('YYYY-MM-DD')
  }
}