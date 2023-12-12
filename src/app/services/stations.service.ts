import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { IStation, ResponseModel } from '../models/Station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
 apiEndPoint: string ='';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }



}
