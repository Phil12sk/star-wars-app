import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

export class GetGiphy{
    link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
    http: Http;
    giphies = [];

    constructor(http: Http) {
        this.http = http;
    }

    searchGiphy(searchTerm: HTMLInputElement): void {
        var apiLink = this.link + searchTerm.value;
        this.http.request(apiLink)
            .subscribe((res: Response) => {
                this.giphies = res.json().data;
                console.log(this.giphies);
            });
    }
}