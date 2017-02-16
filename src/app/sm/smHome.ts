import {Component} from '@angular/core';
//import {bootstrap} from '@angular/platform-browser-dynamic';
import { Http, 
  Response, 
  RequestOptions, 
  HttpModule, 
  Headers } from '@angular/http';
import {APP_BASE_HREF, 
  LocationStrategy, 
  HashLocationStrategy} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WRService} from '../webresume.service';
import { ProjectHome} from './projectHome';
import { Project} from './project';
import { UpdProject} from './update.project';
import { appRoutes } from '../routes';

@Component({
  selector: 'smHome',
  templateUrl: './smHome.html'
})

export class SMHome {
    
    constructor(public wrservice : WRService) {
      
    }
    
    ngOnInit() {
        
    }
    
}    
