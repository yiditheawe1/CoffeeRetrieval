import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule} from 'ngx-pagination'
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetCoffeeReducer } from './Store/getcoffee.reducer';
import { StoreModule } from '@ngrx/store'

const appRoutes: Routes=[
  {
    path:'ProductList',
    component: ProductListPageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    LayoutModule,
    FlexLayoutModule,
    StoreModule.forRoot({coffees: GetCoffeeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
