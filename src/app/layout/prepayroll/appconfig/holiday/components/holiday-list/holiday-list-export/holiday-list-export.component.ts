import { Component, OnInit, OnDestroy } from '@angular/core';

import { HolidayService, HolidayModel, HolidayObject } from '../../../holiday.service';

import { ExportToCsv } from "export-to-csv";

@Component({
  selector: 'app-holiday-list-export',
  templateUrl: './holiday-list-export.component.html',
  styleUrls: ['./holiday-list-export.component.scss']
})
export class HolidayListExportComponent implements OnInit {

  holidayLocal: HolidayObject

  options = {
    filename: "dias-feriados",
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: false,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: ["Id", "Descripción"]
  };

  csvExporter = new ExportToCsv(this.options);

  constructor(private holidayService: HolidayService,) { }

  ngOnInit(): void {
    this.holidayService.holidayState.subscribe(data => {
      this.holidayLocal = data
      if (this.holidayLocal.holidayAction == 'export') {
        this.onExportToCsv();
        this.holidayLocal.holidayAction = null;
        this.holidayService.changeHolidayObject(this.holidayLocal)
      }
    })
  }



  // Export data
  onExportToCsv() {
    const exportData = this.holidayLocal.holidayArray.map(x => {
      return {
        id: x.holidayId,
        holidayDescription: x.holidayDescription,
      };
    });
    this.csvExporter.generateCsv(exportData);
  }

}
