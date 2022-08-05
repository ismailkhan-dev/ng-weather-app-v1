import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateConvertService {

  constructor() { }

  convertUNIXTime(date: any): Observable<any> {
    
    date = date * 1000

    return of(date)
    
  }

}
