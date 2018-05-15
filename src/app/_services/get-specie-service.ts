import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Specie } from '../_models/specie.model';
import { ErrorHandler } from '../app.error-handler';
import { API } from "../api"
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetSpecieService{
    constructor(private http: Http){}

    getSpecie(): Observable<Specie[]>{
        let url = API.API_ROOT + 'species/'
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }

    getSpecieDetails(id: string): Observable<Specie[]>{
        let url = API.API_ROOT + 'species/' + id;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }
}