import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { AdminComponent } from './pages/admin/admin.component';
 

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
   {
    path:'search/:fromStationId/:toStationId/:dateOfTravel',
    component:SearchComponent
   },
   {
    path:'bookings',
    component:BookingsComponent
   },
   {
    path:'admin',
    component:AdminComponent
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
