import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { People } from '../_models/people.model';
import { ErrorHandler } from '../app.error-handler';
import { API } from "../api"
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetPeopleService{
    constructor(private http: Http){}

    getPeople(): Observable<People[]>{
        let url = API.API_ROOT + 'people/'
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }

    getPeopleDetails(urlPeople: string): Observable<People[]>{
        let url = urlPeople
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }
}