import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {amanService} from '../aman/aman.service';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'aman',
  templateUrl: './aman.component.html',
  styleUrls: ['./aman.component.scss'],
  providers: [amancomponant,amanService]
})
export class amancomponant {
country:any; 
userDetails:any=[];
firstname:any;
lastname:any;
public countries: any ={};
public states: any = [];
public states2: any = [];
public cities: any= [];
public cities2: any= [];

constructor(
  public amanservice:amanService,
  public toster: ToastrService,
) {

}
ngOnInit() {
  this.data();
}
data(){
  this.amanservice.getCountry().subscribe( res => {
    this.countries=res.data;
  },(error) => {
    console.error(error);
  }
);
this.amanservice.getState().subscribe( res => {
  this.states=res.data;
},(error) => {
  console.error(error);
});
this.amanservice.getCity().subscribe( res => {
this.cities=res.data;
},(error) => {
console.error(error);
}
);
}
onAddUsers(form: NgForm) {
  this.userDetails.firstname = this.userDetails.firstname ;
  this.userDetails.country = this.userDetails.country ;
  this.userDetails.selectedState = this.userDetails.selectedState ;
  this.userDetails.citySelected = this.userDetails.citySelected ;
  
}

getStates(country) {
    this.states2.length = 0;
  if (!country) {
    this.toster.error('You have not selected a country yet', 'Please select a country');
  }else {
    this.states2 = [];
    this.states2.length = 0;
    for(let i = 0; i<this.states.length; i++){
      if(country === this.states[i].country_id){
        this.states2.push(this.states[i]);
       }
    }
  }
  this.states=[];
 }


getCities(selectedState) {
  this.cities2 = [];
  if (!selectedState) {
    this.toster.error('You have not selected a state yet', 'Please select a state');
  }else {
    for(let i = 0; i<this.cities.length; i++){
      if(selectedState === this.cities[i].state_id){
        this.cities2.push(this.cities[i]);
       }
    }
  }
}
}