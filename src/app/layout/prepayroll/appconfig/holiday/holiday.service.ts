import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// Vendor
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
// Local
import { EnvService } from 'src/shared/environment/env.service';


/********************************************************************** */
// Incomming model
export class HolidayModel {
  holidayId: string;
  holidaySts: string;
  holidayChk: string;
  holidayCreated: string;
  holidayUpdated: string;
  holidayData: string;

  holidayDate?: string;
  holidayDescription: string;
}

export class HolidayFullDto {
  holidayId: string;
  holidaySts: string;
  holidayChk: string;
  holidayCreated: string;
  holidayUpdated: string;
  holidayData: string;

  holidayDate?: string;
  holidayDescription: string;
}

// Outgoing model
export class HolidayDto {
  holidayDate: string;
  holidayDescription: string;
}

// Operating Model
export class HolidayObject {
  holidaySelected: HolidayModel;
  holidayDto: HolidayDto;
  holidayFullDto: HolidayFullDto;
  holidayArray: Array<HolidayModel>;
  holidayFilteredArray: Array<HolidayModel>;
  holidayAction: string;
  holidayTerm: string;
  holidayIndex: number;
  holidayForm: FormGroup;

  holidayTitle: string;
  holidaySubtitle: string;
}

/********************************************************************** */

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
/* State **************************************************************/
  private holidaySubject = new BehaviorSubject<HolidayObject>(
    new HolidayObject()
  );
  holidayState = this.holidaySubject.asObservable();
  /* End State **********************************************************/
  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) { }

  // State
  changeHolidayObject(record) {
    this.holidaySubject.next(record);
  }

/********************************************************************** */
  // Crud


  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  listHoliday(): Observable<HolidayModel[]> {
    const url = `${this.env.apiUrl}/api/holiday`;
    let response = this.http
      .get<HolidayModel[]>(url)
      .pipe(map((data) => data));
    return response
  }

  deleteHoliday(holidayId: string): Observable<any> {
    const url = `${this.env.apiUrl}/api/holiday/${holidayId}`;
    let response = this.http
      .delete<any>(url)
      .pipe(map((data) => data));
    return response
  }

  addHoliday(item: HolidayDto): Observable<HolidayModel> {
    const url = `${this.env.apiUrl}/api/holiday`;
    let response = this.http
      .post<any>(url, item)
      .pipe(map((data) => data));
    return response
  }

  updateHoliday(holidayId: string, item): Observable<HolidayModel> {
    const url = `${this.env.apiUrl}/api/holiday/${holidayId}`;
    let response = this.http
      .patch<HolidayModel>(url, item)
      .pipe(map((data) => data));
    return response
  }

  findByFilter(item: HolidayModel): Observable<HolidayModel[]> {
    let query = JSON.stringify({ field: item });
    const url = `${this.env.apiUrl}/api/holiday/findByFilter`;
    return this.http.post<HolidayModel[]>(url, item).pipe(map((data) => data));
  }

/********************************************************************** */
  // Others

}
