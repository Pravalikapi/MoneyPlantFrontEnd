import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/dist/src/angular-font-awesome.module';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { PopupComponent } from './popup/popup.component';
import { MoneyplantitemComponent } from './moneyplantitem/moneyplantitem.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { ExpertlistComponent } from './expertlist/expertlist.component';
import { ExpertdetailComponent } from './expertdetail/expertdetail.component';
import { BannerComponent } from './banner/banner.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ExpertspageComponent } from './expertspage/expertspage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const allLinks:Routes=[
  {path:'moneyplantitemComponent',component:MoneyplantitemComponent},
  {path:'popupform',component:PopupComponent},
  {path:'confirmationform',component:ConfirmationComponent},
  {path:'list',component:ExpertspageComponent},
 
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExpertsComponent,
    PopupComponent,
    MoneyplantitemComponent,
    ExpertlistComponent,
    ExpertdetailComponent,
    BannerComponent,
    ConfirmationComponent,
    ExpertspageComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allLinks),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
