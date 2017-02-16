import {Component} from '@angular/core';
import {WRService} from '../webresume.service';
import { Http, 
    Response, 
    RequestOptions, 
    Headers } from '@angular/http';

@Component({
  selector: 'webresume-skill',
  templateUrl: './skill.component.html'
  //providers: [WRService, HTTP_PROVIDERS],
})
export class WebResumeSkill {
  skilltype:string;
  webskills:string;
  databaseskills:string;
  serviceskills:string;
  public myServices:string;
  public mySkills:string;
  services:string;
  
  constructor(public wrservice : WRService) {
    
  }
    ngOnInit() {
    this.getServices();
    this.getSkills("web");
    this.getSkills("database");
    this.getSkills("service");
  }
  
  private getServices(): void {
    this.wrservice
      .GetServices()
      .subscribe(data => this.myServices = data,
        error => console.log(error),
        () => {
           this.services = this.myServices;
          }
       );
  }  
  
  private getSkills(skilltype): void {
    this.wrservice
      .GetSkills(skilltype)
      .subscribe(data => this.mySkills = data,
        error => console.log(error),
        () => {
            if (skilltype === "web")
              this.webskills = this.mySkills;
            if (skilltype === "database")
              this.databaseskills = this.mySkills;
            if (skilltype === "service")
              this.serviceskills = this.mySkills;
          }
       );
  }
  
}

