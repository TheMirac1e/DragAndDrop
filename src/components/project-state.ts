import Project from './project.ts'
import {ProjectStatus, TListener} from "../types/types.ts";

class ProjectState {
  private listeners: TListener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {

  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();

    return this.instance;
  }

  addListener(listenerFn: TListener) {
    this.listeners.push(listenerFn);

  }

  public addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active)
    this.projects.push(newProject);
    console.log(this.projects);
    for (const listenersFn of this.listeners) {
      listenersFn(this.projects.slice());
    }
  }

}

export default ProjectState;
