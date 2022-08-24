import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CoffeeServicesService } from '../../service/coffee-services.service';


@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  private toggle: boolean=false
  public currentPage:number =1
  count:number=0
  tablesize=10
  constructor(private http: HttpClient, public cs: CoffeeServicesService) { 
   
  }

  ngOnInit(): void {

  }

  //this works
  ontableDataChange(event:any){
    this.currentPage=event
    //this.cs.GetCoffee()
  }


//not working
  displayList(page:any) {
    if(this.cs.coffee50.length!=50){
     
    }
    else{
      if(this.toggle) 
        return
      this.toggle=true
      let paginatedItems=this.cs.coffee50.slice(page*10,page*10+10)
      for(let i=0;i<10;i++){
        let pi=paginatedItems[i]
        let item_element=document.createElement('div')
        item_element.className='list-group-item'
        //item_element.classList.add('pi')
        item_element.innerText=(page*10+i+1)+'---'+JSON.stringify(pi)
        document.getElementById("area")?.appendChild(item_element)
      }
      this.setupPagination() //for pagination btns
    }
  }

  setupPagination(){
    for(let i=0; i<5;i++){
      let btn=this.paginationBtn(i+1)
      document.getElementById("area")?.appendChild(btn)
    }
  }

  paginationBtn(page:number,){
    let btn=document.createElement('button')
    btn.classList.add(page.toString())
    btn.innerText= page.toString()

    if(this.currentPage==page){
      console.log(page)
      //btn.classList.add('active')
      btn.addEventListener('click', ()=>{
        console.log('hihi')
        this.currentPage = page;
        this.displayList(page);
    
        //let current_btn = document.getElementById('a')
        //current_btn = document.querySelector('button.active');
        //current_btn.classList.remove('active');
    
        //btn.classList.add('active');
      });
      //this.displayList(this.currentPage)
    }
    return btn
  }


    
}
