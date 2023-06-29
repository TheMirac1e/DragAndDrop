import { projectState } from "../main";
import Project from './project.ts'
import {ProjectStatus} from "../types/types.ts";
import ComponentAbstract from "./component-abstract.ts";

class ProjectList extends ComponentAbstract<HTMLDivElement, HTMLElement>{
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  configure() {
    projectState.addListener((projects: any) => {
      const relevantProjects = projects.filter((prj: any) => {
        if(this.type === 'active') {
          return prj.status === ProjectStatus.Active
        }
        return prj.status === ProjectStatus.Finished
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderedContent() {}

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)!;
    listEl.innerHTML = '';
    for(const prjItem of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = prjItem.title;

      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
  }
}

export default ProjectList;
