import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { SimpleModalService } from 'ngx-simple-modal';
import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { timeout } from 'rxjs/operator/timeout';

export interface AlertModel {
  title: string;
  message: string;
}
@Pipe({name: "safeHtml"})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
  selector: 'alert',
  template: `
    <div class="modal-content" id="modalMessage">
      <div class="modal-body" [innerHTML]="message | safeHtml">
        
      </div>
      <div class="modal-footer">
        <button id="btnFechar" type="button" class="btn btn-dark" (click)="close();">Close</button>
      </div>
    </div>
  `
})
export class AlertComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel {
    title: string;
    message: string;
    constructor(private SimpleModalService: SimpleModalService) {
        super();
    }
  
    showAlert(data) {
      let mes = 
        '<h4 class="text-center"><strong>'+data['title']+'</strong></h4>'+
        '<p><em>'+data['opening_crawl']+'</em></p>'+
        '<div class="container-fluid padding-top-2">'+
          '<div class="row">'+
            '<div class="col-lg-6">'+
              '<p><strong>Director</strong>: '+data['director']+'</p>'+
              '<p><strong>Producer</strong>: '+data['producer']+'</p>'+
              '<p><strong>Release date</strong>: '+data['release_date']+'</p>'+
            '</div>'+
            '<div class="col-lg-6">'+
              '<img src="assets/episode_'+data['episode_id']+'.jpg" class="float-right" style="border-radius: 60px; width: 150px; height: 150px;"/>'+
            '</div>'+
          '</div>'+
        '</div>'
      this.SimpleModalService.addModal(AlertComponent, {title: 'Alert title!', message: mes});
    }
}