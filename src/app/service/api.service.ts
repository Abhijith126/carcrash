import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllCrashes() {
    return this.http.get(environment.crash_api);
  }

  public filterCrashesByDate(date: string) {
    return this.http.get(`${environment.crash_api}?crash_date=${date}`);
  }

  public fetchPage(offset: number, limit: number) {
    return this.http.get(
      `${environment.crash_api}?&$offset=${offset}&$limit=${limit}`
    );
  }

  public fetchDetail(crashid: number) {
    return this.http.get(`${environment.crash_api}?collision_id=${crashid}`);
  }
}
