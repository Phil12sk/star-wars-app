import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ROUTES } from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Http, RequestOptions, Headers } from '@angular/http';
import { SimpleModalModule } from 'ngx-simple-modal';
import { GetFilmsService } from './_services/get-films-service';
import { AlertComponent, SafeHtmlPipe } from './modal/alert.component';
import { HelloComponent } from './hello/hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetPeopleService } from './_services/get-people-service';
import { GetPlanetService } from './_services/get-planet-service';
import { GetSpecieService } from './_services/get-specie-service';
import { GetStarshipService } from './_services/get-starship-service';
import { GetVehicleService } from './_services/get-vehicle-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    SafeHtmlPipe,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    SimpleModalModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    GetFilmsService,
    GetPeopleService,
    GetPlanetService,
    GetSpecieService,
    GetStarshipService,
    GetVehicleService,
    AlertComponent
  ],
  entryComponents:[
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
