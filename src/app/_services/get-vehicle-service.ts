import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Vehicle } from '../_models/vehicle.model';
import { ErrorHandler } from '../app.error-handler';
import { API } from "../api"
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetVehicleService{
    constructor(private http: Http){}

    getVehicle(): Observable<Vehicle[]>{
        let url = API.API_ROOT + 'vehicles/'
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }

    getVehicleDetails(id: string): Observable<Vehicle[]>{
        let url = API.API_ROOT + 'vehicles/' + id;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }
}