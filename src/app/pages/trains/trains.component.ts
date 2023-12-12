import { Component } from '@angular/core';
import { TrainsService } from 'src/app/services/trains.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent {

  trainList: any []= [];
  constructor(private trainSrv: TrainsService){
      this.getAllTrains();
  }
  getAllTrains() {
    this.trainSrv.getAllTrains().subscribe((res:any)=>{
      this.trainList =  res.data;
    })
  }
}
