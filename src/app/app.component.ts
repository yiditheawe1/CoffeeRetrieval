import { Component } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
//import { CoffeeServicesService } from './service/coffee-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffie-retrieval';
  public currentPage:number =0
  count:number=0
  tablesize:number =10
  //constructor(private http: HttpClient, public cs: CoffeeServicesService) { }
}
