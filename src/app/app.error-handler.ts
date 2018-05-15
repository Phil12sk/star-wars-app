import { Response } from '@angular/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertComponent } from './modal/alert.component';
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorHandler{
    constructor(private alertComponent: AlertComponent){}
    static handlError(error: Response | any){
        let errorMessage: string;
        let errorNumber: number = error.json()[0]['code'];
        if(error instanceof Response){
            errorMessage =`Erro ${error.status} ao acessar a URL ${error.url} -  ${error.statusText}`
        }else{
            errorMessage = error.toString();
        }
        return Observable.throw(alert);
    }
}