import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { AppConfigurationClient } from '@azure/app-configuration'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetaisslComponent } from './product/product-detaissl.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductDetaisslComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AppConfigurationClient,
    RouterModule.forRoot([
      {path : 'product', component: ProductComponent},
      {path : 'product/:id', component: ProductDetailComponent},
      {path : 'welcome', component: WelcomeComponent},
      {path : '', redirectTo:'welcome', pathMatch:'full'},
      {path : '**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
