import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { Booking, IPassenger, IStation, ResponseModel } from '../models/Station';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  apiEndPoint: string ='';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getTrainsBetweenStations(serachObj: any) :Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_TRAINS_BETWEEN_STATIONS+ `?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`)
  }

  
  createPassenger(obj: IPassenger) :Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER,obj  )
  }

  login(obj: IPassenger) :Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.LOGIN,obj  )
  }
  bookTrain(obj: Booking) :Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.BOOK_TRAIN,obj  )
  }

  getAllTrains() :Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_TRAINS  )
  }
  getAllBookings(id:number) :Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_BOOKING_BY_PASSENGER + '?passengerid='+ id )
  }
}
