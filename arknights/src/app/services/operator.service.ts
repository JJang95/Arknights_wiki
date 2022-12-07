import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lore, Root } from '../models/operator.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getOperatorData(operatorName: string):Observable<Root>{
    return this.http.get<Root>(environment.operatorApiBaseUrl+'/operator/'+operatorName);
  }
}

