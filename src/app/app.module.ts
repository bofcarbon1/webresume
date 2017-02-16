import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,
  ReactiveFormsModule,
  FormBuilder, 
  FormGroup,
  FormControl,
  Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WebResumeSkill } from './skill/skill.component';
import { WebResumeService, Tab, Tabs} from './service/service.component';
import { WRService } from './webresume.service';
import { ProjectService } from './service/project.service';
import { SMHome } from './sm/smHome';
import { ProjectHome } from './sm/projectHome';
import { UpdProject} from './sm/update.project';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent, WebResumeSkill, WebResumeService, 
    Tab, Tabs, SMHome, ProjectHome, UpdProject
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [WRService, ProjectService],
  bootstrap: [AppComponent]
})  
export class AppModule { }

//bootstrap(WebResumeApp, [
//  ROUTER_PROVIDERS,
//  { provide: LocationStrategy, useClass: HashLocationStrategy }
//]);
