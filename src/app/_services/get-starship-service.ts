import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Starship } from '../_models/starship.model';
import { ErrorHandler } from '../app.error-handler';
import { API } from "../api"
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetStarshipService{
    constructor(private http: Http){}

    getStarship(): Observable<Starship[]>{
        let url = API.API_ROOT + 'starships/'
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }

    getStarshipDetails(id: string): Observable<Starship[]>{
        let url = API.API_ROOT + 'starships/' + id;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }
}