import { Component } from '@angular/core';
import { TrainsService } from 'src/app/services/trains.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  trainList: any []= [];  loggedUserData: any;
  constructor(private trainSrv: TrainsService){
      
      const localData = localStorage.getItem('trainUser');
      if (localData != null) {
        this.loggedUserData = JSON.parse(localData);
        this.getAllTrains();
  
      }
  }
  getAllTrains() {
    this.trainSrv.getAllBookings(this.loggedUserData.passengerID).subscribe((res:any)=>{
      this.trainList =  res.data;
    })
  }
}
