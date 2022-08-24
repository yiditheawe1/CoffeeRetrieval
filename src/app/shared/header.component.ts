import { Component } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { CoffeeServicesService } from '../service/coffee-services.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout' 

@Component({
    selector:'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent{

    displayMap=new Map([
        [Breakpoints.Small,'1'],
        [Breakpoints.XSmall,'1']
    ])
    constructor(private http: HttpClient, public cs: CoffeeServicesService, private breakpointObserver: BreakpointObserver) { 
        
        //set breakpoint for sm xs
        breakpointObserver.observe([
            Breakpoints.Small,
            Breakpoints.XSmall
        ]).subscribe(res=>{
            for(const query of Object.keys(res.breakpoints)){
                if(res.breakpoints[query]){
                    document.getElementById('keyword')?.classList.add('self')
                }
            }
        })
    }

}