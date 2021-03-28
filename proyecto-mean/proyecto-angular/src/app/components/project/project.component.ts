import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { Global } from "../../services/global";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  public projects : Array<Project>;
  public url: string;

  constructor(private _projectService : ProjectService) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this._projectService.findAll().subscribe(
      response => {
        console.log(response);
        if(response.projects)
        {
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
