import Project from './project.ts'
import {ProjectStatus} from "../types/types.ts";
import StateAbstract from "./state-abstract.ts";

class ProjectState extends StateAbstract<Project>{
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super()
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();

    return this.instance;
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
