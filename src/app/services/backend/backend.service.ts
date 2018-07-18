import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {
  baseUrl = 'http://localhost:9010';

  constructor(private http: HttpClient) { }

  getGuestList():Observable<any> {
    return this.http.get(this.baseUrl + '/api/getall');
  }

  sendSMSToAll():Observable<any> {
    return this.http.get(this.baseUrl + '/out/allvoid');
  }
}
