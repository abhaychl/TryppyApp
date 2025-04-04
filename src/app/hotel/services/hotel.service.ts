import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUrl = `${environment.tryppyapiUrl}Property/`;  
  constructor(private httpclient:HttpClient,@Inject(PLATFORM_ID) private platformId: Object) { }
  
  ngOnInit() {  
  }

  getHotelList(): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/GetPropertyList`);
  }
}
