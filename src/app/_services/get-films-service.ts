import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Films } from '../_models/films.model';
import { ErrorHandler } from '../app.error-handler';
import { API } from "../api"
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetFilmsService{
    constructor(private http: Http){}

    getFilms(): Observable<Films[]>{
        let url = API.API_ROOT + 'films/'
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }

    getFilmDetails(id: string): Observable<Films[]>{
        let url = API.API_ROOT + 'films/' + id;
        console.log(url);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${url}`, {headers: headers})
            .map(response => response.json())
            .catch(ErrorHandler.handlError);
    }
}