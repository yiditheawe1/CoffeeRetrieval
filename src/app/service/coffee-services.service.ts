import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Store } from '@ngrx/store';
import { CoffeeState } from '../Store/getcoffee.reducer';
import { addCoffee } from '../Store/getcoffee.action';

@Injectable({
  providedIn: 'root'
})
export class CoffeeServicesService {

  toggle: boolean=true
  coffee50: {}[]=[
    //JSON.stringify({"id":5497,"uid":"4b9e36df-2b62-48bb-9096-b5f113d6ddbe","blend_name":"Summer Equinox","origin":"Kigeyo Washing Station, Rwanda","variety":"S288","notes":"balanced, velvety, bittersweet chocolate, baggy, walnut","intensifier":"bright"}),
    //JSON.stringify({"id":4808,"uid":"959f0178-c20f-4ca5-bbef-97ba4796081a","blend_name":"Blacktop Cowboy","origin":"Gishamwana Coffee Island, Rwanda","variety":"Liberica","notes":"quick, coating, prune, barley, red apple","intensifier":"delicate"})
  ]


  constructor(private http: HttpClient, private store: Store<CoffeeState>) { }

    // FUNCS
    GetCoffee(){
      if(!this.toggle){
        return
      }
      for(let i=0;i<50;i++){
        this.http.get('https://random-data-api.com/api/coffee/random_coffee').subscribe(val=>{
          this.store.dispatch(addCoffee({coffee: val}));
          //this.coffee50.push(JSON.stringify(val))
        })
      }
      this.toggle=false
    }



}
