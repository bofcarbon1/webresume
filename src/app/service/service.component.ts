import {
  Directive,
  Inject,
  EventEmitter,
  Output,
  Input,
  Component,
  forwardRef,
  Host
} from '@angular/core';
//import {bootstrap} from '@angular/platform-browser-dynamic';
import {ProjectService} from './project.service';

@Component({
  selector: `tab`,
  template: `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  isActive: boolean;
  @Input()
  public title: string;
  constructor(@Inject(forwardRef(() => Tabs)) @Host() private tabs: Tabs) {
    this.tabs.addTab(this);
  }
}

@Component({
  selector: 'tabs',
  styles: [
    `
      .tab {
        display: inline-block;
      }
      .tab-header {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .tab-header .is-active {
        background-color: #737373; //#eee;
      }
      .tab-header li {
        display: inline-block;
        cursor: pointer;
        padding: 5px;
        border: 1px solid #ccc;
      }
      .tab-content {
        border: 1px solid #ccc;
        border-top: none;
        padding: 5px;
      }
    `
  ],
  template: `
    <div class="tab">
      <ul class="tab-header">
        <li *ngFor="let tab of tabs; let index = index"
          [class.is-active]="active == index" (click)="select(index)">
          {{tab.title}}
        </li>
      </ul>
      <div>
        <ng-content></ng-content>
      </div>
    </div> 
    `
  //providers: [ProjectService] 
})
export class Tabs {
  @Output('changed')
  private tabChanged: EventEmitter<Tab> = new EventEmitter<Tab>();
  private tabs: Tab[];
  private active: number;
  constructor(public projectService:ProjectService) {
    this.tabs = [];
    this.active = 0;
  }
  addTab(tab: Tab) {
    if (this.tabs.length === this.active) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }
  select(index) {
    this.tabs[this.active].isActive = false;
    this.active = index;
    this.tabs[index].isActive = true;
    this.tabChanged.emit(this.tabs[index]);
  }
}

@Component({
  selector: 'webresume-service',
  template: `
   
    <div style="border: 5px solid black">
    <tabs (changed)="tabChanged($event)">
      <tab title="Web Applications">
       <table class="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>
        <table class="table table-bordered table-striped" >
          <tbody>
           <template ngFor let-project [ngForOf]='projects' >
            <tr><td><span>{{project}}</span></td></tr>
           </template>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

      </tab>
      <tab title="Database Applications">
        <table class="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>
        <table class="table table-bordered table-striped">
          <tbody>
           <template ngFor let-project [ngForOf]='projects' >
            <tr><td><span>{{project}}</span></td></tr>
           </template>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

      </tab>
      <tab title="Web Services">
       <table class="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>
        <table class="table table-bordered table-striped">
          <tbody>
           <template ngFor let-project [ngForOf]='projects' >
            <tr><td><span>{{project}}</span></td></tr>
           </template>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

      </tab>
    </tabs> 
  </div>
  `
  ,
  //directives: [Tab, Tabs]
  //providers: [ProjectService]
})
export class WebResumeService {
  projects:string[];
  tabTitle:string;  
  
  constructor(public projectService:ProjectService){ 
    this.projects = [
      "Comcast   (2016) - Added features to .NET product web app using C#.NET MVC JavaScript(JQuery, Ajax)",
      "NDOR      (2016) - Created a .NET web admin tool using C#.NET MVC JavaScript(JQuery, Ajax) ",
      "Limelight (2016) - Created .NET web apps using C#.NET MVC JavaScript(JQuery, Ajax)  "
    ];
  }
  
  tabChanged(tab) {
    this.projectService.setTabTitle(tab.title);
    this.tabTitle = tab.title;
    if (this.tabTitle === "Web Applications") {
      this.projects = [
        "Comcast   (2016) - Added features to .NET product web app using C#.NET MVC JavaScript(JQuery, Ajax)",
        "NDOR      (2016) - Created a .NET web admin tool using C#.NET MVC JavaScript(JQuery, Ajax) ",
        "Limelight (2016) - Created .NET web apps using C#.NET MVC JavaScript(JQuery, Ajax)  "
      ];
    }
    if (this.tabTitle === "Database Applications") {
      this.projects = [
        "Comcast   (2016) - Created and updated product database tables using using SQL Server",
        "NDOR      (2016) - Updated highway safety database tables using SQL Server ",
        "Limelight (2016) - Created and updated database tables using SQL Server "
      ];
    }
    if (this.tabTitle === "Web Services") {
      this.projects = [
        "Limelight (2016) - Created web services using .NET Web API  "
      ];
    }
  }
  
}