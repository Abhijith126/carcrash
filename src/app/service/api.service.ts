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

  // https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000

  // https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000&vehicle_type_code2=PASSENGER%20VEHICLE

  // https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000&vehicle_type_code2=PASSENGER%20VEHICLE&$offset=0&$limit=5
}
