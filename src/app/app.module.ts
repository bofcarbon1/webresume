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
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {SingleMediaPlayer} from './presentation/single-media-player';
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
    Tab, Tabs, ProjectTypeFilterPipe, SortDscPipe,
    SingleMediaPlayer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [WRService, ProjectService],
  bootstrap: [AppComponent, SingleMediaPlayer]
})  

export class AppModule { }

