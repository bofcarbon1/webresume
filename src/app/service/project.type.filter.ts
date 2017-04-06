import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Project } from '../service/project';

@Pipe({
    name: 'projecttypefilter',
    pure: false
})
@Injectable()
export class ProjectTypeFilterPipe implements PipeTransform {
    transform(projects: Project[], args: any[]): any {
        if (!projects) return []; 
        return projects.filter(project => 
        project.type.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    }
}