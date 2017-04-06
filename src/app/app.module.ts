import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
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
import { appRoutes } from './routes';
import { ProjectTypeFilterPipe } from './service/project.type.filter';
import { SortDscPipe } from './sort.dsc.pipe';

@NgModule({
  declarations: [
    AppComponent, WebResumeSkill, WebResumeService, 
    Tab, Tabs, ProjectTypeFilterPipe, SortDscPipe 
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

