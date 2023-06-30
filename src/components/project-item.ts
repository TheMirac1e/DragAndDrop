import ComponentAbstract from "./component-abstract.ts";
import Project from "./project.ts";

class ProjectItem extends ComponentAbstract<HTMLUListElement, HTMLLIElement> {
    private project: Project;

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);

        this.project = project;

        this.renderedContent();
    }

    configure() {}
    renderedContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.project.people.toString();
        this.element.querySelector('p')!.textContent = this.project.description;
    }
}

export default ProjectItem;
